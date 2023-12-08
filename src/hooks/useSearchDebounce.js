import { useRef, useState } from 'react';

function useSearchDebounce(collections) {
  const [searchValue, setSearchValue] = useState('');

  const timerId = useRef(null);
  const [filteredCollections, setFilteredCollections] = useState(
    collections || []
  );

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      setFilteredCollections(
        collections.filter((collection) =>
          collection.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      timerId.current = null;
    }, 500);
  };

  return [searchValue, handleSearch, filteredCollections];
}

export default useSearchDebounce;
