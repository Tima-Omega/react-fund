import React from 'react';
import Input from './UI/input';
import Select from './UI/select';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <Input
                placeholder="поиск..."
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            />
            <Select
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="сортировка по"
                options={[
                    {
                        value: 'title',
                        name: 'По названию',
                    },
                    {
                        value: 'body',
                        name: 'По описанию',
                    },
                ]}
            />
        </div>
    );
};

export default PostFilter;
