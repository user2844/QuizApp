import style from "./Dashboard.module.css";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import Button from "../../components/Button/Button.jsx";
import ProfilePic from "../../assets/images/ProfilePic.jpg"


export default function Dashboard() {

    const topPlayers = [
        {username: "Pemba", score: 1200},
        {username:"Sarah", score: 1150},
        {username:"John", score: 1000},
        {username: "Alice", score: 900},
        {username: "Mike" , score: 850}
    ]
  return (
    <div className={style.mainWrapper}>
      {/*this is the header div of dashboard */}
      <div className={style.header}>
        <div className={style.lefthead}>
          <h3>Quiz Web</h3>
        </div>

        <div className={style.righthead}>
          <span className={style.point}> your point</span>
          <button className={style.profileBtn}> ur profile</button>
        </div>
      </div>

      {/*this is the lowerbody div*/}
      <div className={style.bodyDiv}>
        {/*this div is for the side bar */}
        <div className={style.sidebar}>hello</div>

        {/*this div is for content*/}
        <div className={style.dashDiv}>

            <div className={style.profileDiv}>
              <div className={style.contextDiv}>
                <div className={style.contextHeader}>
                    <h3>Welcome back, Pemba. Let's beat your high score!</h3>
                    <p>Keep sharpening your mind, one quiz at a time.</p>
                </div>
                <div className={style.contextBtn}>
                    <Button text="Take Quiz" variant = "toggleBtn"/>
                    <Button text="View History" variant="toggleBtn"/>
                    <Button text="Daily Challenge" variant="toggleBtn"/>
                </div>
              </div>
              <div className={style.imgDiv}>
                <img src={ProfilePic}></img>
              </div>
            </div>
            <div className={style.leaderBoard}>
                <h3>Leaderboard</h3>
            {topPlayers.slice(0,5).map((player, index) => (
                <div key={index} className={style.leadingPlayers}>
                    <span>#{index + 1} {player.username}</span>
                    <span>{player.score}</span>
                </div>
            ))

            }                 
            </div>
            <div className={style.achievements}>
                <ProgressCircle/>
            </div>
            
        </div>
      </div>
    </div>
  );
}
