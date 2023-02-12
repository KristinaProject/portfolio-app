export function WorkShow({ setOpen, item, setItem }) {
  return (
    <div className="modal">
      <div className="modal__image">
        <img src={item.image} alt={item.image} />
      </div>
      <div className="modal__text">
        <h2 className="modal__text-title">{item.name}</h2>
        <p className="modal__text-description">{item.description}</p>
        <p className="modal__text-tools">{item.tools}</p>
        <button>Code</button>
        <button>Live</button>
        <button
          onClick={() => {
            setOpen(false);
            setItem("");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
