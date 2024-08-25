import './App.css';
import {useState} from "react";

function App() {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [inputNameText, setInputValue] = useState('');
  const [Colortext, setColorText] = useState('');
  const [inputColorText, setInputcolor] = useState('');
  const [SizeText, setSizeText] = useState('16');
  const [inputSizeText, setInputSizeText] = useState('');
  const [image, setImage] = useState(null);
  
  function ChangeFontFamily (){
    setFontFamily(inputNameText);
  }

  function handleInputChange (event) {
    setInputValue(event.target.value);
  };

  function ChangeColor (){
    setColorText(inputColorText)
  }

  function handleInputChangeColor (event) {
    setInputcolor(event.target.value);
  };

  function ChangeSize (){
    setSizeText(inputSizeText+"px");
  }

  function handleInputSize (event) {
    setInputSizeText(event.target.value);
  };
  
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

      return (
        <>
        <h1 className="text">
          Олександр Коваленко
        </h1>
          <h3 className="text2" style={{fontFamily : fontFamily, color : Colortext, fontSize : SizeText }}>
            У сучасному світі технології відіграють вирішальну роль у багатьох аспектах нашого життя. Від смартфонів і інтернету до штучного інтелекту та автоматизації, технологічні досягнення швидко змінюють те, як ми працюємо, навчаємося і взаємодіємо один з одним.
            Одна з найбільших переваг технологій — це доступ до інформації. Сьогодні будь-яка людина може знайти відповідь на майже будь-яке питання за допомогою декількох кліків.<img src={image} alt="Article" style={{ width: '300px', height: 'auto', float : 'right'}} /> Це дозволяє не лише підвищити рівень освіти і загальної обізнаності, а й сприяє розвитку критичного мислення та креативності.
            Однак, з розвитком технологій виникають і нові виклики. Наприклад, багато хто страждає від цифрової залежності, що впливає на фізичне та психічне здоров'я. Також важливо враховувати питання конфіденційності даних, коли великі корпорації збирають і використовують інформацію про користувачів без їхньої згоди.
            Технології також змінюють робочий ринок. Багато професій автоматизуються, що призводить до скорочення робочих місць у деяких галузях. З іншого боку, з'являються нові можливості для роботи, особливо у сфері інформаційних технологій та інновацій. Це вимагає від сучасних працівників постійного навчання та адаптації до нових умов.
            Отже, вплив технологій на суспільство є двостороннім. Вони можуть бути потужним інструментом для розвитку та покращення життя, але також потребують відповідального підходу до їх використання. Як ми адаптуємося до цих змін, визначить наше майбутнє.
          </h3>
          <h2 className="text">
            Дата видання: 25 серпня 2024 року.
          </h2>
          <div className='container'>
            <div style={{marginLeft : 30}}>
              <h3 className='text' style={{marginLeft : 25}}>Назва шрифту</h3>
              <input 
                type="text"
                value={inputNameText} 
                onChange={handleInputChange}
              />
              <button onClick={ChangeFontFamily} style={{marginLeft : 10}}>Ok</button>
            </div>
            <div style={{marginLeft : 30}}>
              <h3 className='text' style={{marginLeft : 25}}>Колір шрифту</h3>
              <input 
                type="text"
                value={inputColorText} 
                onChange={handleInputChangeColor}
              />
              <button onClick={ChangeColor} style={{marginLeft : 10}}>Ok</button>
            </div>
            <div style={{marginLeft : 30}}>
              <h3 className='text' style={{marginLeft : 25}}>Розмір шрифту</h3>
              <input 
                type="text"
                value={inputSizeText} 
                onChange={handleInputSize}
              />
              <button onClick={ChangeSize} style={{marginLeft : 10}}>Ok</button>
            </div >
            <div className='control-group' style={{marginLeft : 30}}>
              <h3 className='text'>Зображення</h3>
              <input 
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </>
      );
    }

export default App;
