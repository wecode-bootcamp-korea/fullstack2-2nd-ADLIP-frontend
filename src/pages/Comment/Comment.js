import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import CommentHeader from './Components/CommentHeader';
import ReviewCard from './Components/ReviewCard';
import Paging from './Components/Paging';
import ReviewHandler from './Components/ReviewHandler';
import { API } from '../../API/api';

const LIMIT = 10;

function Comment(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const { id: pathParameterId } = props.match.params;
  const [reviews, setReviews] = useState([]);
  const [totalConutOfComment, setTotalConutOfComment] = useState(0);
  const [ratingAvg, setRatingAvg] = useState(0);
  const sortOptionData = [
    {
      id: 1,
      option: '최신순',
      isChecked: true,
    },
    {
      id: 2,
      option: '평점 높은순',
      isChecked: false,
    },
    {
      id: 3,
      option: '평점 낮은순',
      isChecked: false,
    },
  ];
  const [isSortOptionOpen, setIsSortOptionOpen] = useState(false);
  const [sortOptions, setSortOptions] = useState(sortOptionData);
  const [page, setPage] = useState(1);

  const latest = sortOptions[0].isChecked;
  const ratingHigh = sortOptions[1].isChecked;
  const ratingLow = sortOptions[2].isChecked;

  let order;
  latest && (order = 'latest');
  ratingHigh && (order = 'ratingHigh');
  ratingLow && (order = 'ratingLow');

  const query = `orderBy=${order}&offset=${(page - 1) * LIMIT}`;

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    fetch(`${API}/products/${pathParameterId}/comments?${query}`)
      .then(res => res.json())
      .then(res => {
        setReviews(res.Comment);
      })
      .catch(console.log);
  }, [query, pathParameterId]);

  useEffect(() => {
    const newPageNumber = Number(location.search[location.search.length - 1]);
    setPage(newPageNumber);
  }, [location]);

  const getReviews = () => {
    fetch(`${API}/products/${pathParameterId}/comments?orderBy=latest&offset=0`)
      .then(res => res.json())
      .then(res => {
        setReviews(res.Comment);
        setTotalConutOfComment(res.totalConutOfComment);
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
    history.push(`/products/${pathParameterId}/comments?page=1`);
    window.scrollTo(0, 0);
    setIsSortOptionOpen(false);
  };

  const handlePageChange = page => {
    setPage(page);
    history.push(`/products/${pathParameterId}/comments?page=${page}`);
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
        totalConutOfComment={totalConutOfComment}
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
        totalConutOfComment={totalConutOfComment}
      />
    </section>
  );
}

export default Comment;
