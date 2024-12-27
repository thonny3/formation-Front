import React from 'react'

export default function 
() {
  return (
    <div className='px-10'>
        <h1 className='font-bold'>Transaction votre payement </h1>
        <div className="card mt-5">
            <div className="card-header flex">
                <div className="id font-semibold w-[10%]">ID</div>
                <div className="Nom du  cours font-semibold w-[40%]">Cours</div>
                <div className="Methode payement font-semibold w-[20%]">Payement</div>
                <div className="Montant font-semibold w-[20%]">Montant</div>
                <div className="Montant font-semibold w-[10%]">Date</div>
                <div className="status font-semibold w-[10%]">Status</div>
            </div>
            <div className="card-body flex mt-3">
                <div className="w-[10%]">1</div>
                <div className="w-[40%]">Developpement application  web</div>
                <div className="w-[20%]">Airtel Money</div>
                <div className="w-[20%]">150000 AR</div>
                <div className="w-[10%]">08/10/2024</div>
                <div className="bg-green-500 w-[10%] text-center rounded-full text-sm text-white  px-2 py-1">payé</div>
            </div>
            <div className="card-body flex mt-3">
                <div className="w-[10%]">2</div>
                <div className="w-[40%]">Cours de Data Science avec R</div>
                <div className="w-[20%]">MVola</div>
                <div className="w-[20%]">650000 AR</div>
                <div className="w-[10%]">12/10/2024</div>
                <div className="bg-blue-500 w-[10%] text-center rounded-full text-sm text-white px-2 py-1">En attente</div>
            </div>
        </div>
    </div>
  )
}
