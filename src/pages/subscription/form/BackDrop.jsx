const BackDrop = ({handleModal}) => {
  return (
    <div onClick={handleModal} className="backdrop z-30 fixed w-full h-screen inset-0 bg-gray-800 opacity-25" />
  )
}

export default BackDrop;