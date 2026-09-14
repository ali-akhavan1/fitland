import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

function Pagination({ totalPages, page, setPage }) {
  const pageItems = Array.from({ length: totalPages }, (_, i) => i + 1);
  // console.log(pageItems);

  const goNextPage = () => {
    if (page < totalPages) {
      setPage((page) => page + 1);
    }
  };

  const goPrevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const handlePagination = (pageItem) => {
    setPage(pageItem);
  };

  if (totalPages > 1) {
    return (
      <div className="flex-ic gap-6 w-fit h-14 mx-auto">
        <button
          onClick={goPrevPage}
          disabled={page === 1}
          className={`btn size-6 rounded-small bg-ededed transition-all ${page === 1 && "opacity-45"}`}
        >
          <ArrowRight2 size={16} />
        </button>

        <div className="flex-ic gap-6">
          {pageItems.length > 7 ? (
            <>
              {pageItems.slice(0, 4).map((item, index) => (
                <span
                  onClick={() => handlePagination(item)}
                  className={`page-item ${item === page ? "active-page-item" : ""}`}
                  key={index}
                >
                  {item}
                </span>
              ))}
              <span className="page-item">...</span>
              <span className="page-item">
                {totalPages}
                {9}
              </span>
            </>
          ) : (
            pageItems.map((item, index) => (
              <span
                onClick={() => handlePagination(item)}
                className={`page-item ${item === page ? "active-page-item" : ""}`}
                key={index}
              >
                {index + 1}
              </span>
            ))
          )}
        </div>

        <button
          onClick={goNextPage}
          disabled={page === totalPages}
          className={`btn size-6 rounded-small bg-ededed transition-all ${page === totalPages && "opacity-40"}`}
        >
          <ArrowLeft2 size={16} />
        </button>
      </div>
    );
  }
}

export default Pagination;
