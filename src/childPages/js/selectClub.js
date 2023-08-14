import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { selectClub, allProjects } from '../../storage/dataSlice';
import '../css/select.css'

function Row(cId, cName, gId, count) {
  return {cId, cName, gId, count}
}


// https://www.youtube.com/watch?v=1MtHkHpUbS4
// Table: https://mui.com/material-ui/react-table/#api
function SelectClub() {
  const dispatch = useDispatch()
  // const members = useSelector(allMembers)
  
  let rows = []

  const submitHandler = e => {
    e.preventDefault()
    rows = []
    document.getElementById("out2").innerHTML = 
    `<tbody>
      <tr>
        <th>クラブID</th>
        <th>クラブ名</th>
        <th>グループID</th>
        <th>プロジェクトの数</th>
      </tr>
    </tbody>`
    dispatch(selectClub())
    .then((res) => {
      if (res.payload != undefined && res.payload.length > 0) {
        (res.payload).forEach((r) => {
          rows.push(Row(r.ClubID, r.Club_Name, r.GroupID, r.Num_Projects))
        });


        rows.forEach((r) => {

          document.getElementById("out2").insertAdjacentHTML('beforeend', 
          `<tbody>
            <tr>
              <td>${r.cId}</td> 
              <td>${r.cName}</td> 
              <td>${r.gId}</td> 
              <td>${r.count}</td> 
            </tr>
          </tbody>`)
          
        });
      }
      
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>各グループが取り組んでいるプロジェクトの数のリストを表示</h3>
        <p style={{textAlign:'left'}}>SELECT Club.ClubID, Club.Club_Name, P.GroupID, COUNT(P.ProjectID) AS Num_Projects<br/>
            FROM Group_WorksOn_FundedProject P<br/>
            INNER JOIN ClubGroup ON ClubGroup.GroupID = P.GroupID<br/>
            INNER JOIN Club ON Club.ClubID = ClubGroup.ClubID<br/>
            GROUP BY Club.ClubID, P.GroupID;</p>
        <button type="submit">表示</button>
      </form> 
      
      <table id="out2" style={{textAlign:'left'}}>
        <tbody>
          <tr>
            <th>クラブID</th>
            <th>クラブ名</th>
            <th>グループID</th>
            <th>プロジェクトの数</th>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default SelectClub;

