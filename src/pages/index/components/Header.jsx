import logo from '../../../assets/images/logo.png'
const Header = () => {
  return (
    <section className="flex bg-header_index bg-cover min-h-[145px] md:min-h-[500px]">
      <div className="w-1/3 mx-auto self-center">
        <img src={logo} alt="logo" />
      </div>
    </section>
  );
}

export default Header;