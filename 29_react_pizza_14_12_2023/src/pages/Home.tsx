import React, { useEffect } from "react";
import Categories from "../components/categories/Categories";
import Sorting from "../components/sorting/Sorting";
import Cards from "../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../redux/slices/filterSlice";
import { selectSearch } from "../redux/slices/searchSlice";
import { fetchItems } from "../redux/slices/itemsSlice";
import Pagination from "../components/pagination/Pagination";

const Home = () => {
  const { categoryId, sortingItem, categoryNames, currentPage } =
    useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      // @ts-ignore
      fetchItems({ categoryId, sortingItem, searchValue, currentPage })
    );
  }, [categoryId, sortingItem, searchValue, currentPage]);

  return (
    <>
      <section>
        <Categories />
        <Sorting />
      </section>
      <Cards title={`${categoryNames[categoryId]} пиццы`} />
      <Pagination />
    </>
  );
};

export default Home;