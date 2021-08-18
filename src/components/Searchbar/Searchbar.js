import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleNameChange = (event) => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search.trim() === "") {
      toast.error("Введите название фильма.");
      return;
    }
    onSubmit(search);
    setSearch("");
  };

  return (
    <header className={styles.Searchbar}>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className={styles.SearchForm}
      >
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search movies"
          name="search"
          value={search}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
