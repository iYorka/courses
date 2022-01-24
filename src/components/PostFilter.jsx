import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={event => setFilter({...filter, query: event.target.value})}
        placeholder="Posts search..."

      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Sort'
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By text'}
        ]}
      />
    </div>
  );
};

export default PostFilter;