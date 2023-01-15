import { FC } from 'react';
import Input from 'components/ui/input';
import Select from 'components/ui/select';
import { Filter } from '../types/Filter';

interface FilterProps {
    filter: Filter;
    setFilter: (value: Filter) => void;
}

const PostFilter: FC<FilterProps> = ({ filter, setFilter }) => {
    return (
        <div>
            <Input
                placeholder="поиск..."
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: (e.target as HTMLInputElement).value })
                }
            />
            <Select
                value={filter.sortKey}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sortKey: selectedSort as Filter['sortKey'] })
                }
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
