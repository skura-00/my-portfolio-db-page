import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { select } from '../../storage/dataSlice';
import '../css/select.css'

function Member(id, adrs, fname, lname, dob, eml) {
  return {id, adrs, fname, lname, dob, eml}
}


// https://www.youtube.com/watch?v=1MtHkHpUbS4
// Table: https://mui.com/material-ui/react-table/#api
function SelectMember() {
  const dispatch = useDispatch()
  
  let memberList = []

  const submitHandler = e => {
    e.preventDefault()
    memberList = []
    document.getElementById("out").innerHTML = 
    `<tbody>
      <tr>
        <th>学生ID</th>
        <th>名前</th>
        <th>苗字</th>
        <th>住所</th>
        <th>メール</th>
        <th>生年月日</th>
      </tr>
    </tbody>`
    dispatch(select())
    .then((res) => {
      if (res.payload != undefined && res.payload.length > 0) {
        const arr = Array.from(res.payload);
        arr.forEach(m => {
          memberList.push(Member(m.StudentID, m.Member_Address, m.First_Name, m.Last_Name, m.Date_Of_Birth, m.Email))
          console.log(m)
        }
        );


        memberList.forEach((m) => {

          const shorten = m.dob ? m.dob.substring(0, 10) : '';
          document.getElementById("out").insertAdjacentHTML('beforeend', 
          `<tbody>
            <tr>
              <td>${m.id}</td> 
              <td>${m.fname}</td> 
              <td>${m.lname}</td> 
              <td>${m.adrs}</td> 
              <td>${m.eml}</td> 
              <td>${shorten}</td> 
            </tr>
          </tbody>`)
          
        });
      }
      
    })
  }

  return (
    <div>

      <form onSubmit={submitHandler}>
        <h3>Memberのリストを表示</h3>
        <p>SELECT * FROM MEMBER</p>
        <button type="submit">表示</button>
      </form> 

      <table id="out" style={{textAlign:'left'}}>
        <tbody>
          <tr>
            <th>学生ID</th>
            <th>名前</th>
            <th>苗字</th>
            <th>住所</th>
            <th>メール</th>
            <th>生年月日</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SelectMember;

