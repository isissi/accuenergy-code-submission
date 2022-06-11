import "./PaginationTable.styles.scss"

const PaginationTable = ({searchHistory}) => {
  return (
    <div className="table-container">
      {searchHistory.map((location, index) => {
        return (
          <p key={index}>{location.address}</p>
        )
      })}
    </div>
  )
}

export default PaginationTable;