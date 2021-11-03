import React, { useState, useEffect } from 'react';
import CommentHeader from './Components/CommentHeader';
import ReviewCard from './Components/ReviewCard';
import Paging from './Components/Pagination';
import ReviewHandler from './Components/ReviewHandler';
import { API } from '../../API/api';

const LIMIT = 10;

function Comment(props) {
  console.log(props);
  const id = props.match.params.id;
  const [reviews, setReviews] = useState([]);
  const sortOptionData = [
    {
      id: 1,
      option: '평점 높은순',
      isChecked: true,
    },
    {
      id: 2,
      option: '평점 낮은순',
      isChecked: false,
    },
    {
      id: 3,
      option: '최신순',
      isChecked: false,
    },
  ];
  const [sortOptions, setSortOptions] = useState(sortOptionData);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    fetch('/data/Comment/comments.json')
      .then(res => res.json())
      .then(res => setReviews(res.data))
      .catch(console.log);
  };

  const [page, setPage] = useState(1);

  const handlePageChange = page => {
    setPage(page);
    const query = `limit=${LIMIT}$offset=${(page - 1) * LIMIT}`;
    console.log(query);
    fetch(`${API}/comments?${query}`)
      .then(res => res.json())
      .then(res => setReviews(res.data))
      .catch(console.log);
    window.scrollTo(0, 0);
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
    fetchSortData();
  };

  const fetchSortData = () => {
    const ratingHigh = sortOptions[0].isChecked;
    const ratingLow = sortOptions[1].isChecked;
    const recent = sortOptions[2].isChecked;

    let order;
    ratingHigh && (order = 'ratinghigh');
    ratingLow && (order = 'ratinglow');
    recent && (order = 'recent');

    const query = `orderby=${order}&page=${page}`;

    fetch(`${API}/comments?${query}`)
      .then(res => res.json())
      .then(res => setReviews(res.data))
      .catch(console.log);
  };

  const deleteReview = id => {
    let confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmDelete) {
      const newReviews = [...reviews].filter(review => id !== review.id);
      setReviews(newReviews);
    }
  };

  const handleParameter = (id, page) => {
    props.history.push(`/products/${id}/comments&page=${page}`);
  };

  return (
    <section>
      <CommentHeader
        reviews={reviews}
        sortOptions={sortOptions}
        changeSortOption={changeSortOption}
      />
      <ReviewCard
        reviews={reviews}
        page={page}
        handleLike={handleLike}
        deleteReview={deleteReview}
      />
      <ReviewHandler reviews={reviews} setReviews={setReviews} />
      <Paging
        id={id}
        page={page}
        handlePageChange={handlePageChange}
        handleParameter={handleParameter}
      />
    </section>
  );
}

export default Comment;
