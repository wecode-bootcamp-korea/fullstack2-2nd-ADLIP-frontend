/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import CommentHeader from './Components/CommentHeader';
import ReviewCard from './Components/ReviewCard';
import Paging from './Components/Paging';
import ReviewHandler from './Components/ReviewHandler';
import { API_ENDPOINT } from '../../api';

const LIMIT = 10;

function Comment() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const paramsId = params.id;
  const [reviews, setReviews] = useState([]);
  const [totalCountOfComment, setTotalCountOfComment] = useState(0);
  const [ratingAvg, setRatingAvg] = useState(0);
  const sortOptionData = [
    {
      id: 1,
      option: '최신순',
      isChecked: true,
      orderBy: 'latest',
    },
    {
      id: 2,
      option: '평점 높은순',
      isChecked: false,
      orderBy: 'ratingHigh',
    },
    {
      id: 3,
      option: '평점 낮은순',
      isChecked: false,
      orderBy: 'ratingLow',
    },
  ];
  const [isSortOptionOpen, setIsSortOptionOpen] = useState(false);
  const [sortOptions, setSortOptions] = useState(sortOptionData);
  const [page, setPage] = useState(1);
  const [selectedSortOption] = sortOptions.filter(option => option.isChecked);
  const order = selectedSortOption.orderBy;
  const query = `orderBy=${order}&offset=${(page - 1) * LIMIT}`;

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/products/${paramsId}/comments?${query}`)
      .then(res => res.json())
      .then(res => {
        setReviews(res.Comment);
      })
      .catch(console.log);
  }, [query, paramsId]);

  useEffect(() => {
    const newPageNumber = Number(location.search[location.search.length - 1]);
    setPage(newPageNumber);
  }, [location]);

  const getReviews = () => {
    fetch(
      `${API_ENDPOINT}/products/${paramsId}/comments?orderBy=latest&offset=0`
    )
      .then(res => res.json())
      .then(res => {
        setReviews(res.Comment);
        setTotalCountOfComment(res.totalCountOfComment);
        setRatingAvg(res.ratingAvg);
      })
      .catch(console.log);
  };

  const handleLike = review => {
    const index = reviews.indexOf(review);
    const newReviews = [...reviews];
    newReviews[index].isLiked = !newReviews[index].isLiked;
    setReviews(newReviews);
  };

  const changeSortOption = sort => {
    const newSortOptions = [...sortOptions];
    const sortIndex = sort.id - 1;
    newSortOptions.forEach(option => (option.isChecked = false));
    newSortOptions[sortIndex].isChecked = true;
    setSortOptions(newSortOptions);
    history.push(`/products/${paramsId}/comments?page=1`);
    window.scrollTo(0, 0);
    setIsSortOptionOpen(false);
  };

  const handlePageChange = page => {
    setPage(page);
    history.push(`/products/${paramsId}/comments?page=${page}`);
    window.scrollTo(0, 0);
  };

  const deleteReview = id => {
    let confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmDelete) {
      const newReviews = [...reviews].filter(review => id !== review.id);
      setReviews(newReviews);
    }
  };

  return (
    <section>
      <CommentHeader
        isSortOptionOpen={isSortOptionOpen}
        setIsSortOptionOpen={setIsSortOptionOpen}
        sortOptions={sortOptions}
        changeSortOption={changeSortOption}
        totalCountOfComment={totalCountOfComment}
        ratingAvg={ratingAvg}
      />
      <ReviewCard
        reviews={reviews}
        handleLike={handleLike}
        deleteReview={deleteReview}
      />
      <ReviewHandler reviews={reviews} setReviews={setReviews} />
      <Paging
        page={page}
        handlePageChange={handlePageChange}
        totalCountOfComment={totalCountOfComment}
      />
    </section>
  );
}

export default Comment;
