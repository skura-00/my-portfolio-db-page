import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { insert } from '../../storage/dataSlice';
import '../css/insert.css';

function Insert() {
  const [address, setAddress] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()
    
    if (firstName == '') alert('An error occured. Please fill the first name box.')
    else if (lastName == '') alert('An error occured. Please fill the last name box.')
    else if (dateOfBirth == '') alert('An error occured. Please select your date of birth.')
    else if (email == '') alert('An error occured. Please fill the email box.')
    else {
      dispatch(insert({address: address, firstName: firstName, lastName: lastName, dob: dateOfBirth, email: email}))
      .then((res) => {
        setAddress('')
        setFirstName('')
        setLastName('')
        setDateOfBirth('')
        setEmail('')
      })
    }
  }

  
  return (
    <div>

      <form onSubmit={submitHandler} className='container'>
        <h3 className='title'>Memberに新規メンバーを追加</h3>

        <section>
          <label htmlFor='address'>住所</label>
          <input id='address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
        </section>

        <section>
          <label htmlFor='lastName'>氏</label>
          <input id='lastName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </section>

        <section>
          <label htmlFor='firstName'>名</label>
          <input id='firstName' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </section>


        <section>
          <label htmlFor='dateOfBirth'>生年月日</label>
          <input id='dateOfBirth' type='date' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </section>

        <section>
          <label htmlFor='email'>Email</label>
          <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        </section>

        <button type="submit">追加</button>

      </form>

      <p>SELECTのページでご確認ください。</p>
    </div>
  );
}

// Error: 新規メンバーを追加できませんでした。値を確認して再度お試しください。

export default Insert;

