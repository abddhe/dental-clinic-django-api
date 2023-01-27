import React from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = ({ pending, headerTitle, data, columns }) => {
    return (
        <DataTable
            title={headerTitle}
            columns={columns}
            data={data}
            pagination
            // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            // subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            responsive={true}
            progressPending={pending}
        />
    );
};

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <input
            id="search"
            type="search"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <button type="button" onClick={onClear}>
            X
        </button>
    </>
);
export const Filtering = () => {
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] =
        React.useState(false);
    // const filteredItems = fakeUsers.filter(
    //     item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    // );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <FilterComponent
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);
};
export default DataTableComponent;
