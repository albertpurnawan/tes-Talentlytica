import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [data1,setData1] = useState()
  var handleSubmit = (e) => {
    const aspek1 = [];
    const aspek2 = [];
    const aspek3 = [];
    const aspek4 = [];
    const last = [];
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++){
      if (e.target[i].name == 'aspek1') {
        aspek1.push(Number(e.target[i].value));
      } else if (e.target[i].name == 'aspek2') {
        aspek2.push(Number(e.target[i].value));
      }else if (e.target[i].name == 'aspek3') {
        aspek3.push(Number(e.target[i].value));
      }else if (e.target[i].name == 'aspek4') {
        aspek4.push(Number(e.target[i].value));
      }
    }
    var jsonObject1 = {};
    for (let i = 0; i < aspek1.length; i++) {
      var key1 = 'mahasiswa_' + (i + 1);
      jsonObject1[key1] = aspek1[i];
    }
    
    var jsonObject2 = {};
    for (let i = 0; i < aspek2.length; i++) {
      var key2 = 'mahasiswa_' + (i + 1);
      jsonObject2[key2] = aspek2[i];
    }

    var jsonObject3 = {};
    for (let i = 0; i < aspek3.length; i++) {
      var key3 = 'mahasiswa_' + (i + 1);
      jsonObject3[key3] = aspek3[i];
    }

    var jsonObject4 = {};
    for (let i = 0; i < aspek4.length; i++) {
      var key4 = 'mahasiswa_' + (i + 1);
      jsonObject4[key4] = aspek4[i];
    }

    last.push(jsonObject1, jsonObject2, jsonObject3, jsonObject4);
    
    var jsonObject = {};
    for (let i = 0; i < last.length; i++) {
      var key = 'aspek_penilaian_' + (i + 1);
      jsonObject[key] = last[i];
    }
    document.getElementById("myPre").innerHTML = JSON.stringify(jsonObject, null, 1);
    document.getElementById("myP").innerHTML = "Berikut hasilnya atau dapat dilihat pada console";
    console.log(jsonObject);
  }

  return (
    <div className="App">
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <form onSubmit={(e) => { handleSubmit(e)}}>
        <table>
          <tr>
            <th className='person'></th>
            <th className='input'><p>Aspek penilaian 1</p></th>
            <th className='input'><p>Aspek penilaian 2</p></th>
            <th className='input'><p>Aspek penilaian 3</p></th>
            <th className='input'><p>Aspek penilaian 4</p></th>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 1</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 2</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 3</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 4</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 5</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 6</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 7</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 8</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 9</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
            <tr className='row'>
            <td className='person'>
              <div className='divperson'>
                <img src='/profile.png' alt='profile' width={20} height={20} />
                <p>Mahasiswa 10</p>
              </div>
            </td>
            <td className='input'><input name='aspek1' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek2' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek3' type='number' min={1} max={10} /></td>
            <td className='input'><input name='aspek4' type='number' min={1} max={10} /></td>
          </tr>
          </table>
          <button type='submit'>Simpan</button>
      </form>
      <div className='result'>
        <p id="myP"></p>
        <pre id="myPre" ></pre>
      </div>
    </div>
  );
}

export default App;
