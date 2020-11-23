import "./TheoryAndPractice.css"

export default function TheoryAndPractice() {
  return (
    <section className="section-tap">
      <section className="cources-card">
        <div className="card-tap"></div>
        <h3 className="h2-card">У нас есть курсы по следующим направлениям</h3>
        <button className="btn-card" style={{left: '527px', width: '121px'}}><p className="p-btn-text">JAVA</p></button>
        <button className="btn-card" style={{left: '695px', width: '259px'}}><p className="p-btn-text">JavaScript/HTML/CSS</p></button>
        <button className="btn-card" style={{left: '1001px', width: '108px'}}><p className="p-btn-text">C++</p></button>
        <button className="btn-card" style={{left: '1156px', width: '99px'}}><p className="p-btn-text">C#</p></button>
      </section>
      <section className="main-section">

      </section>
    </section>
  )
}