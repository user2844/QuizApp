import style from './ProgressCircle.module.css';

export default function ProgressCircle({
    progress = 75,
     score = 1200
    }){

    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (progress / 100) * circumference;

    return(
        <div className={style.circleCard}>
            <svg className={style.svg} viewBox='0 0 180 180'> 
                {/* background circle */}
                <circle cx="90" cy="90" r={radius} className={style.bgCircle}/>
                {/*progress*/}
                <circle 
                cx="90"
                 cy="90"
                r={radius}
                 className={style.progressCircle}
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset
                    }}
                />
            </svg>
            <div className={style.text}>
                <h2>{progress}%</h2>
                <p>{score} Points</p>

            </div>

        </div>
    )
}