import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'
import NavButton from '../atoms/NavButton'
import LocationIcon from '../atoms/LocationIcon'
import UserIcon from '../atoms/UserIcon'
import CartIcon from '../atoms/CartIcon'

export default function Navbar() {
  return (
    <nav className="-z-50">
      <div className="bg-primary-500 h-2" />
      <div className="bg-primary-200 h-24 py-2 px-4 flex justify-center items-center gap-10">
        {/* Logo */}
        <div className="relative w-[128px] h-[64px] lg:w-56 lg:h-28">
          <Image
            alt="logo"
            src="/logo.webp"
            fill
            className="object-contain"
          />
        </div>

        {/* Barra de pesquisa */}
        <div className="flex-1 max-w-lg hidden lg:block">
          <SearchBar onSearch={() => { }} />
        </div>

        {/* Botões de navegação */}
        <div className="flex gap-6">
          {/* Local */}
          <NavButton className="hidden md:block" icon={<LocationIcon />} collapse>
            <span className="font-black">Onde</span><br />
            <span className="font-medium">você está?</span>
          </NavButton>

          {/* Login */}
          <NavButton icon={<UserIcon />} collapse>
            <span className="font-black max-w-full">Faça login</span><br />
            <span className="font-medium">ou cadastre-se</span>
          </NavButton>

          {/* Cart */}
          <NavButton icon={<CartIcon />} />
        </div>
      </div>

      {/* Nav links */}
      <div className="bg-primary-100 h-14 py-2 shadow-gray-200 shadow-md">
        <NavButton className="md:hidden" icon={<LocationIcon />}>
          <b>Onde </b>{' '}
          <span>você está?</span>
        </NavButton>
      </div>
    </nav>
  )
}
