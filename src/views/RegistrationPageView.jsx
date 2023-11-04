const RegistrationPageView = () => {
  return (
    <div className=' justify-center text-center'>
      <div className='w-1/2 flex flex-col'>
        <h2>Regisztrációs lap</h2>
        <label htmlFor='firstName'>Vezetéknév</label>
        <input className='border justify-center' type='text' name='' id='' />
        <label htmlFor='lastName'>Keresztnév</label>
        <input className='border justify-center' type='text' name='' id='' />
        <label htmlFor='phone'>Telefonszám</label>
        <input className='border justify-center' type='number' name='' id='' />
        <label htmlFor='email'>E-mail cím</label>
        <input className='border justify-center' type='text' name='' id='' />
        <label htmlFor='psw'>Jelszó</label>
        <input
          className='border justify-center'
          type='password'
          name=''
          id=''
        />
        <label htmlFor='psw-repeat'>Jelszó megerősítés</label>
        <input
          className='border justify-center'
          type='password'
          name=''
          id=''
        />
        <div className='flex flex-row justify-evenly text-center'>
          <p>Elfogadom az általános szerződési feltételeket</p>
          <input type='checkbox' />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPageView;
