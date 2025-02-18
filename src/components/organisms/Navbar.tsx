import Image from 'next/image'
import React from 'react'
import SearchBar from '@/components/molecules/SearchBar'
import NavButton from '@/components/atoms/NavButton'
import LocationIcon from '@/components/atoms/LocationIcon'
import UserIcon from '@/components/atoms/UserIcon'
import CartIcon from '@/components/atoms/CartIcon'
import NavLink from '@/components/atoms/NavLink'
import DepartmentsMenu from '@/components/molecules/DepartmentsMenu'

export default function Navbar() {
  return (
    <>
      <nav className="z-50 sticky top-0">
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
        <div className="bg-primary-100 h-14 py-2 px-4 shadow-md shadow-primary-800/10 flex justify-center items-center w-full">
          <div className="max-w-6xl flex gap-4 w-full divide-x-2 divide-primary-200">
            <DepartmentsMenu />
            <NavButton className="md:hidden" icon={<LocationIcon />}>
              <b>Onde </b>
              <span>você está?</span>
            </NavButton>
            <div className="w-full pl-5 hidden md:flex justify-between items-center">
              <NavLink className="text-lg font-medium text-primary-900">
                Descontos Cliente Unimed Natal
              </NavLink>
              <NavLink className="text-sm text-primary-800">Venda no Uniclube</NavLink>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  )
}
