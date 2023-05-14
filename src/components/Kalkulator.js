import React,{useState} from "react";
import axios from "axios";
import "../style/bmrStyle.css"

const Kalkulator = () => {

const [age, setAge] = useState("");
const [gender, setGender] = useState("female");
const [height, setHeight] = useState("");
const [weight, setWeight] = useState("");

const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
            age,
            gender,
            height,
            weight
        });
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div>
            <div className="bmr-calculator">
                <div className="controls">
                    <form onSubmit={saveUser}>
                        <h3>Age</h3>
                        <input type="text" id="age" value={age} onChange={(e)=> setAge(e.target.value)} />

                        <div className="gender">
                            <h3>Gender</h3>
                            <input type="radio" id="male" name="gender" value={gender} onChange={(e)=> setGender(e.target.value)} />
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" value={gender} onChange={(e)=> setGender(e.target.value)} />
                            <label htmlFor="female">Female</label>
                        </div>

                        <div className="height">
                            <h3>Height</h3>
                            <input type="text" id="height" value={height} onChange={(e)=> setHeight(e.target.value)} />
                            <div className="unit">cm</div>
                        </div>

                        <div className="weight">
                            <h3>Weight</h3>
                            <input type="text" id="weight" value={weight} onChange={(e)=> setWeight(e.target.value)} />
                            <div className="unit">kg</div>
                        </div>

                        <div className="result">
                            <button type="submit" className="calculate-btn">Hitung</button>

                            <div className="result-message">
                                <span className="calories">1,640</span> Calories/day
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Kalkulator