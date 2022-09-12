export function Error({errorMsg}){
    return(
        <div className="bg-red-800 text-white text-center p-3 uppercase rounded-md">
            <p className='text-2xl '>
                {errorMsg}
            </p>
        </div>
    )
} 