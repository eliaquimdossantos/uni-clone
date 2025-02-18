import React, { useState } from 'react'
import NavButton from '../atoms/NavButton'
import MenuIcon from '../atoms/MenuIcon'
import ArrowDownIcon from '../atoms/ArrowDownIcon'
import ArrowUpIcon from '../atoms/ArrowUpIcon'
import Modal from './Modal'
import DepartmentsMenuContent from '../organisms/DepartmentsMenuContent'

export default function DepartmentsMenu() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <NavButton icon={<MenuIcon />} onClick={() => {        
        setShowMenu(!showMenu)}}>
        <span className="text-lg font-semibold text-primary-900 inline-flex items-center gap-1">
          Departamentos
          {showMenu ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </span>
      </NavButton>
      <Modal open={showMenu} onClose={() => setShowMenu(false)}>
        <DepartmentsMenuContent />
      </Modal>
    </>
  )
}
