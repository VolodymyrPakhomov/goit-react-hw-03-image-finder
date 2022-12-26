import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = { searchQuery: '' };

  handleChange = event => {
    this.setState({ searchQuery: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const query = this.state.searchQuery;
    // if (query.trim() === '') {
    //   return Notify.warning('Please, enter a query!');
    // }
    this.props.onSubmitProps(query);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            <ImSearch />
          </SearchFormButton>

          <SearchFormInput
            onChange={this.handleChange}
            defaultValue={this.state.searchQuery}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
