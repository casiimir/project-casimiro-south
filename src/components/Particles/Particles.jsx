import styles from './index.module.scss'

const Particles = () =>  {
    
       return (
          <div className={styles.wrap}>
             {Array.apply(null, Array(500)).map(function(item, i) {
                return (
                   <div className={styles.p}>
                      <div className={styles.q}>
                      </div>
                   </div>
                )
             }, this)}
          </div>
       )
    
 }

 export default Particles;