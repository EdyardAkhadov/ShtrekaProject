import styles from './ChooseTicket.module.css' 

import Navbar from "../navbar/NavBar";

function ChooseTicket() {
    return(
        <div>
            <Navbar/>
            <div className={styles.ChooseTicket_Container}>
                <div>
                    <p>Квиток на потяг</p>
                </div>
                <div>
                    <div>
                    
                    </div>
                    <div >
                        <div className={styles.trainMaket}>
                            <div className={styles.leftSide}>
                                <div className={styles.trainSeat}>1</div>
                                <div className={styles.trainSeat}>2</div>
                                <div className={styles.trainTable}></div>
                                <div className={styles.trainSeat}>5</div>
                                <div className={styles.trainSeat}>6</div>
                                <div className={styles.trainSeat}>9</div>
                                <div className={styles.trainSeat}>10</div>
                                <div className={styles.trainSeat}>13</div>
                                <div className={styles.trainSeat}>14</div>
                                <div className={styles.trainSeat}>17</div>
                                <div className={styles.trainSeat}>18</div>
                                <div className={styles.trainSeat}>21</div>
                                <div className={styles.trainSeat}>22</div>
                                <div className={styles.trainSeat}>25</div>
                                <div className={styles.trainSeat}>26</div>
                                <div className={styles.trainSeat}>29</div>
                                <div className={styles.trainSeat}>30</div>
                                <div className={styles.trainSeat}>33</div>
                                <div className={styles.trainSeat}>34</div>
                                <div className={styles.trainSeat}>37</div>
                                <div className={styles.trainSeat}>38</div>
                                <div className={styles.trainSeat}>41</div>
                                <div className={styles.trainSeat}>42</div>
                                <div className={styles.trainSeat}>45</div>
                                <div className={styles.trainSeat}>46</div>
                                <div className={styles.trainSeat}>49</div>
                                <div className={styles.trainSeat}>50</div>
                                <div className={styles.trainSeat}>53</div>
                                <div className={styles.trainSeat}>54</div>
                            </div>
                            <div className={styles.rightSide}>
                                <div className={styles.trainSeat}>3</div>
                                <div className={styles.trainSeat}>4</div>
                                <div className={styles.trainSeat}>7</div>
                                <div className={styles.trainSeat}>8</div>
                                <div className={styles.trainSeat}>11</div>
                                <div className={styles.trainSeat}>12</div>
                                <div className={styles.trainSeat}>15</div>
                                <div className={styles.trainSeat}>16</div>
                                <div className={styles.trainSeat}>19</div>
                                <div className={styles.trainSeat}>20</div>
                                <div className={styles.trainSeat}>22</div>
                                <div className={styles.trainSeat}>23</div>
                                <div className={styles.trainSeat}>27</div>
                                <div className={styles.trainSeat}>28</div>
                                <div className={styles.trainSeat}>31</div>
                                <div className={styles.trainSeat}>32</div>
                                <div className={styles.trainSeat}>35</div>
                                <div className={styles.trainSeat}>36</div>
                                <div className={styles.trainSeat}>39</div>
                                <div className={styles.trainSeat}>40</div>
                                <div className={styles.trainSeat}>43</div>
                                <div className={styles.trainSeat}>44</div>
                                <div className={styles.trainSeat}>47</div>
                                <div className={styles.trainSeat}>48</div>
                                <div className={styles.trainSeat}>50</div>
                                <div className={styles.trainSeat}>51</div>
                                <div className={styles.trainTable}></div>
                                <div className={styles.trainSeat}>55</div>
                                <div className={styles.trainSeat}>56</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChooseTicket;