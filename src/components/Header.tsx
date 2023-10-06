import Logo from '../assets/logo.svg?react';

export interface IHeader {}

function Header({}: IHeader) {
  return (
    <div className="h-14 px-6 bg-blue flex items-center ">
      <Logo className="" />
    </div>
  );
}

export default Header;
