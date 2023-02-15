export function WorkShow({ setOpen, item, setItem }) {

  return (
    <div id="bg-modal">
      <div className="modal">
        <div className="modal__image">
          <img src={item.image} alt={item.image} />
        </div>
        <div className="modal__text">
          <h2 className="modal__text-title">{item.name}</h2>
          <p className="modal__text-description">{item.description}</p>
          <p className="modal__text-tools">{item.tools}</p>
          <div className="modal__text-buttons">
            {item.code === "" ? <></> : <button>Code</button>}
            {item.live === "" ? <></> : <button>Live</button>}
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
      </div>
    </div>
  );
}
