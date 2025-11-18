

function FabCreatePost( {onclick}) {
  return (
    <button
        onClick={onclick}
        className="
            fixed bottom-7 right-7 z-100
            h-16 w-16
            rounded-full
            bg-blue-600 text-white
            shadow-xl
            flex items-center justify-center
            hover:bg-blue-700
            transition-all duration-300
            hover:scale-110
            active:scale-99
            cursor-pointer
            
        "
    >
      <span className="text-3xl leading-none">+</span>
    </button>

  );
}

export default FabCreatePost;