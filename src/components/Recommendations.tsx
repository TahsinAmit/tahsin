import { useAppState } from '../state/state';
import { useRandomPageRange } from '../utils';

const recommendation = {
  1: () => (
    <div>
      <h1>Recommendation page: 1</h1>
      <div className="option" id="RAT_REC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. Enjoy a complementary drink.</p>
    <button data-choice="RAT_REC1" onclick="redirectToNextPage('RAT_REC1')">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Enjoy a complementary drink.</p>
    <button data-choice="NRA_REC1" onclick="redirectToNextPage('NRA_REC1')">Choose this option</button>
  </div>
    </div>
  ),
  2: () => (
    <div>
      <h1>Recommendation page: 2</h1>
      <div>
  <div className="option" id="RAT_COM1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. Stay committed to your green goals.</p>
    <button data-choice="RAT_COM1" onclick="redirectToNextPage('RAT_COM1')">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Stay committed to your green goals.</p>
    <button data-choice="NRA_COM1" onclick="redirectToNextPage('NRA_COM1')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  3: () => (
    <div>
      <h1>Recommendation page: 3</h1>
      <div>
  <div className="option" id="RAT_AUT1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. Endorsed by your <span id="authorityFigureOutput" />.</p>
    <button data-choice="RAT_AUT1" onclick="redirectToNextPage('RAT_AUT1')">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Endorsed by your <span id="authorityFigureOutput" />.</p>
    <button data-choice="NRA_AUT1" onclick="redirectToNextPage('NRA_AUT1')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  4: () => (
    <div>
      <h1>Recommendation page: 4</h1>
      <div>
  <div className="option" id="RAT_SOC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.  Highly rated by people in the same income level groups as you.</p>
    <button data-choice="RAT_SOC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat.  Highly rated by people in the same income level groups as you.</p>
    <button data-choice="NRA_SOC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  5: () => (
    <div>
      <h1>Recommendation page: 5</h1>
      <div>
  <div className="option" id="RAT_LIK1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.  Also preferred by your friend <span id="bestFriendOutput" />.</p>
    <button data-choice="RAT_LIK1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat.  Also preferred by your friend <span id="bestFriendOutput" />.</p>
    <button data-choice="NRA_LIK1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  6: () => (
    <div>
      <h1>Recommendation page: 6</h1>
      <div>
  <div className="option" id="RAT_SCA1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. Exclusive offer ending soon. We only have 3 seats left!</p>
    <button data-choice="RAT_SCA1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Exclusive offer ending soon. We only have 3 seats left!</p>
    <button data-choice="NRA_SCA1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  7: () => (
    <div>
      <h1>Recommendation page: 7</h1>
      <div>
  <div className="option" id="SR_REC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_REC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="REC1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Enjoy a complementary drink.</p>
    <button data-choice="REC1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  8: () => (
    <div>
      <h1>Recommendation page: 8</h1>
      <div>
  <div className="option" id="SR_COM1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_COM1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="COM1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Stay committed to your green goals.</p>
    <button data-choice="COM1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  9: () => (
    <div>
      <h1>Recommendation page: 9</h1>
      <div>
  <div className="option" id="SR_AUT1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_AUT1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="AUT1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Endorsed by your <span id="authorityFigureOutput" />.</p>
    <button data-choice="AUT1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  10: () => (
    <div>
      <h1>Recommendation page: 10</h1>
      <div>
  <div className="option" id="SR_SOC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_SOC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SOC1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Highly rated by people in the same income level groups as you.</p>
    <button data-choice="SOC1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  11: () => (
    <div>
      <h1>Recommendation page: 11</h1>
      <div>
  <div className="option" id="SR_LIK1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_LIK1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="LIK1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Also preferred by your friend <span id="bestFriendOutput" />. </p>
    <button data-choice="LIK1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  12: () => (
    <div>
      <h1>Recommendation page: 12</h1>
      <div>
  <div className="option" id="SR_SCA1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_SCA1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SCA1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Exclusive offer ending soon. We only have 3 seats left! </p>
    <button data-choice="SCA1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  13: () => (
    <div>
      <h1>Recommendation page: 13</h1>
      <div>
  <div className="option" id="SR_NRA_REC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_NRA_REC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Enjoy a complementary drink. </p>
    <button data-choice="NRA_REC1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  14: () => (
    <div>
      <h1>Recommendation page: 14</h1>
      <div>
  <div className="option" id="SR_NRA_COM1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_NRA_COM1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Stay committed to your green goals. </p>
    <button data-choice="NRA_COM1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  15: () => (
    <div>
      <h1>Recommendation page: 15</h1>
      <div>
  <div className="option" id="SR_NRA_AUT1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_NRA_AUT1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Endorsed by your <span id="authorityFigureOutput" />. </p>
    <button data-choice="NRA_AUT1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  16: () => (
    <div>
      <h1>Recommendation page: 16</h1>
      <div>
  <div className="option" id="SR_NRA_SOC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_NRA_SOC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Highly rated by people in the same income level groups as you. </p>
    <button data-choice="NRA_SOC1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  17: () => (
    <div>
      <h1>Recommendation page: 17</h1>
      <div>
  <div className="option" id="SR_NRA_LIK1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_NRA_LIK1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Also preferred by your friend <span id="bestFriendOutput" />. </p>
    <button data-choice="NRA_LIK1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  18: () => (
    <div>
      <h1>Recommendation page: 18</h1>
      <div>
  <div className="option" id="SR_NRA_SCA1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. *****</p>
    <button data-choice="SR_NRA_SCA1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Exclusive offer ending soon. We only have 3 seats left! </p>
    <button data-choice="NRA_SCA1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  19: () => (
    <div>
      <h1>Recommendation page: 19</h1>
      <div>
  <div className="option" id="SM_REC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_REC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="REC1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Enjoy a complementary drink. </p>
    <button data-choice="REC1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  20: () => (
    <div>
      <h1>Recommendation page: 20</h1>
      <div>
  <div className="option" id="SM_COM1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_COM1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="COM1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Stay committed to your green goals. </p>
    <button data-choice="COM1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  21: () => (
    <div>
      <h1>Recommendation page: 21</h1>
      <div>
  <div className="option" id="SM_AUT1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_AUT1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="AUT1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Endorsed by your <span id="authorityFigureOutput" />. </p>
    <button data-choice="AUT1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  22: () => (
    <div>
      <h1>Recommendation page: 22</h1>
      <div>
  <div className="option" id="SM_SOC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_SOC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SOC1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Highly rated by people in the same income level groups as you. </p>
    <button data-choice="SOC1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  23: () => (
    <div>
      <h1>Recommendation page: 23</h1>
      <div>
  <div className="option" id="SM_LIK1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_LIK1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="LIK1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Also preferred by your friend <span id="bestFriendOutput" />. </p>
    <button data-choice="LIK1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  24: () => (
    <div>
      <h1>Recommendation page: 24</h1>
      <div>
  <div className="option" id="SM_SCA1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_SCA1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SCA1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an <span id="seatB" /> seat. Exclusive offer ending soon. We only have 3 seats left! </p>
    <button data-choice="SCA1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  25: () => (
    <div>
      <h1>Recommendation page: 25</h1>
      <div>
  <div className="option" id="SM_NRA_REC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_NRA_REC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Enjoy a complementary drink. </p>
    <button data-choice="NRA_REC1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  26: () => (
    <div>
      <h1>Recommendation page: 26</h1>
      <div>
  <div className="option" id="SM_NRA_COM1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_NRA_COM1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Stay committed to your green choice. </p>
    <button data-choice="NRA_COM1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  27: () => (
    <div>
      <h1>Recommendation page: 27</h1>
      <div>
  <div className="option" id="SM_NRA_AUT1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_NRA_AUT1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Endorsed by your <span id="authorityFigureOutput" />. </p>
    <button data-choice="NRA_AUT1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  28: () => (
    <div>
      <h1>Recommendation page: 28</h1>
      <div>
  <div className="option" id="SM_NRA_SOC1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_NRA_SOC1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Highly rated by people in the same income level groups as you. </p>
    <button data-choice="NRA_SOC1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  29: () => (
    <div>
      <h1>Recommendation page: 29</h1>
      <div>
  <div className="option" id="SM_NRA_LIK1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_NRA_LIK1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Also preferred by your friend <span id="bestFriendOutput" />. </p>
    <button data-choice="NRA_LIK1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  30: () => (
    <div>
      <h1>Recommendation page: 30</h1>
      <div>
  <div className="option" id="SM_NRA_SCA1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat.</p>
    <button data-choice="SM_NRA_SCA1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA1_SM">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. Exclusive offer ending soon. We only have 3 seats left! </p>
    <button data-choice="NRA_SCA1_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  31: () => (
    <div>
      <h1>Recommendation page: 31</h1>
      <div>
  <div className="option" id="SR_SM1">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationA" /> for <span id="priceA" /> on an <span id="seatA" /> seat. ***** </p>
    <button data-choice="SR_SM1" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SM1_SR">
    {/* Placeholder for recommendation details */}
    <p>Direct flight to <span id="destinationB" /> for <span id="priceB" /> on an <span id="seatB" /> seat. </p>
    <button data-choice="SM1_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  32: () => (
    <div>
      <h1>Recommendation page: 32</h1>
      <div id="recommendations" className="flex-container">
  <div className="option" id="RAT_REC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Get a free nutrition guide.</p>
    <button data-choice="RAT_REC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Get a free nutrition guide.</p>
    <button data-choice="NRA_REC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  33: () => (
    <div>
      <h1>Recommendation page: 33</h1>
      <div>
  <div className="option" id="RAT_COM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness goal effectively.</p>
    <button data-choice="RAT_COM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness goal effectively.</p>
    <button data-choice="NRA_COM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  34: () => (
    <div>
      <h1>Recommendation page: 34</h1>
      <div>
  <div className="option" id="RAT_AUT2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />.This program is compliant with your health insurance provider. </p>
    <button data-choice="RAT_AUT2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This program is compliant with your health insurance provider.</p>
    <button data-choice="NRA_AUT2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  35: () => (
    <div>
      <h1>Recommendation page: 35</h1>
      <div>
  <div className="option" id="RAT_SOC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />.Trusted by other students from your area. </p>
    <button data-choice="RAT_SOC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Trusted by other students from your area.</p>
    <button data-choice="NRA_SOC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  36: () => (
    <div>
      <h1>Recommendation page: 36</h1>
      <div>
  <div className="option" id="RAT_LIK2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />.Recommended by your friend X. </p>
    <button data-choice="RAT_LIK2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Recommended by your friend X.</p>
    <button data-choice="NRA_LIK2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  37: () => (
    <div>
      <h1>Recommendation page: 37</h1>
      <div>
  <div className="option" id="RAT_SCA2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />.Available for a limited time. 5 out of 50 passes left only! </p>
    <button data-choice="RAT_SCA2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of 50 passes left only! </p>
    <button data-choice="NRA_SCA2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  38: () => (
    <div>
      <h1>Recommendation page: 38</h1>
      <div>
  <div className="option" id="SR_REC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_REC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Get a free  nutrition guide. </p>
    <button data-choice="NRA_REC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  39: () => (
    <div>
      <h1>Recommendation page: 39</h1>
      <div>
  <div className="option" id="SR_COM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />.  ***** </p>
    <button data-choice="SR_COM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness goal effectively. </p>
    <button data-choice="NRA_COM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  40: () => (
    <div>
      <h1>Recommendation page: 40</h1>
      <div>
  <div className="option" id="SR_AUT2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_AUT2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. This program is compliant with your health insurance provider. </p>
    <button data-choice="NRA_AUT2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  41: () => (
    <div>
      <h1>Recommendation page: 41</h1>
      <div>
  <div className="option" id="SR_SOC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />.  ***** </p>
    <button data-choice="SR_SOC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Trusted by other students from your area. </p>
    <button data-choice="NRA_SOC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  42: () => (
    <div>
      <h1>Recommendation page: 42</h1>
      <div>
  <div className="option" id="SR_LIK2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_LIK2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Recommended by your friend X. </p>
    <button data-choice="NRA_LIK2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  43: () => (
    <div>
      <h1>Recommendation page: 43</h1>
      <div>
  <div className="option" id="SR_SCA2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />.  ***** </p>
    <button data-choice="SR_SCA2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of 50 passes left only! </p>
    <button data-choice="NRA_SCA2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  44: () => (
    <div>
      <h1>Recommendation page: 44</h1>
      <div>
  <div className="option" id="SR_NRA_REC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_NRA_REC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC2_SR">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Get a free  nutrition guide. </p>
    <button data-choice="NRA_REC2_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  45: () => (
    <div>
      <h1>Recommendation page: 45</h1>
      <div>
  <div className="option" id="SR_NRA_COM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_NRA_COM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM2_SR">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness goal effectively. </p>
    <button data-choice="NRA_COM2_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  46: () => (
    <div>
      <h1>Recommendation page: 46</h1>
      <div>
  <div className="option" id="SR_NRA_AUT2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_NRA_AUT2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT2_SR">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This program is compliant with your health insurance provider. </p>
    <button data-choice="NRA_AUT2_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  47: () => (
    <div>
      <h1>Recommendation page: 47</h1>
      <div>
  <div className="option" id="SR_NRA_SOC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_NRA_SOC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC2_SR">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Trusted by other students from your area. </p>
    <button data-choice="NRA_SOC2_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  48: () => (
    <div>
      <h1>Recommendation page: 48</h1>
      <div>
  <div className="option" id="SR_NRA_LIK2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_NRA_LIK2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK2_SR">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Recommended by your friend X. </p>
    <button data-choice="NRA_LIK2_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  49: () => (
    <div>
      <h1>Recommendation page: 49</h1>
      <div>
  <div className="option" id="SR_NRA_SCA2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_NRA_SCA2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA2_SR">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of 50 passes left only! </p>
    <button data-choice="NRA_SCA2_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  50: () => (
    <div>
      <h1>Recommendation page: 50</h1>
      <div>
  <div className="option" id="SM_REC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_REC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="REC2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Get a free  nutrition guide. </p>
    <button data-choice="REC2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  51: () => (
    <div>
      <h1>Recommendation page: 51</h1>
      <div>
  <div className="option" id="SM_COM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_COM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="COM2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness goal effectively. </p>
    <button data-choice="COM2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  52: () => (
    <div>
      <h1>Recommendation page: 52</h1>
      <div>
  <div className="option" id="SM_AUT2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_AUT2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="AUT2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. This program is compliant with your health insurance provider. </p>
    <button data-choice="AUT2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  53: () => (
    <div>
      <h1>Recommendation page: 53</h1>
      <div>
  <div className="option" id="SM_SOC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_SOC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SOC2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Trusted by other students from your area.</p>
    <button data-choice="SOC2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  54: () => (
    <div>
      <h1>Recommendation page: 54</h1>
      <div>
  <div className="option" id="SM_LIK2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_LIK2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="LIK2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Recommended by your friend X. </p>
    <button data-choice="LIK2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  55: () => (
    <div>
      <h1>Recommendation page: 55</h1>
      <div>
  <div className="option" id="SM_SCA2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_SCA2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SCA2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of 50 passes left only! </p>
    <button data-choice="SCA2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  56: () => (
    <div>
      <h1>Recommendation page: 56</h1>
      <div>
  <div className="option" id="SM_NRA_REC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_NRA_REC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Get a free  nutrition guide.</p>
    <button data-choice="NRA_REC2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  57: () => (
    <div>
      <h1>Recommendation page: 57</h1>
      <div>
  <div className="option" id="SM_NRA_COM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_NRA_COM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness goal effectively.</p>
    <button data-choice="NRA_COM2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  58: () => (
    <div>
      <h1>Recommendation page: 58</h1>
      <div>
  <div className="option" id="SM_NRA_AUT2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_NRA_AUT2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This program is compliant with your health insurance provider.</p>
    <button data-choice="NRA_AUT2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  59: () => (
    <div>
      <h1>Recommendation page: 59</h1>
      <div>
  <div className="option" id="SM_NRA_SOC2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_NRA_SOC2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Trusted by other students from your area. </p>
    <button data-choice="NRA_SOC2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  60: () => (
    <div>
      <h1>Recommendation page: 60</h1>
      <div>
  <div className="option" id="SM_NRA_LIK2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_NRA_LIK2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Recommended by your friend X. </p>
    <button data-choice="NRA_LIK2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  61: () => (
    <div>
      <h1>Recommendation page: 61</h1>
      <div>
  <div className="option" id="SM_NRA_SCA2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM_NRA_SCA2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA2_SM">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of 50 passes left only! </p>
    <button data-choice="NRA_SCA2_SM" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  62: () => (
    <div>
      <h1>Recommendation page: 62</h1>
      <div>
  <div className="option" id="SM2_SR">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekA" /> program for <span id="fitnessGoal" />. </p>
    <button data-choice="SM2_SR" onclick="redirectToNextPage()">Choose this option</button>
  </div>
  <div className="option" id="SR_SM2">
    {/* Placeholder for recommendation details */}
    <p><span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. ***** </p>
    <button data-choice="SR_SM2" onclick="redirectToNextPage()">Choose this option</button>
  </div>
</div>

    </div>
  ),
  63: () => (
    <div>
      <h1>Recommendation page: 63</h1>
      <div>
  <div className="option" id="RAT_REC3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat. Get complimentary access to a live Q&amp;A session.</p>
    <button data-choice="RAT_REC3" onclick="redirectToNextPage('RAT_REC3')">Choose this option</button>
  </div>
  <div className="option" id="NRA_REC3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat. Get complementary accesss to a live Q&amp;A session.</p>
    <button data-choice="NRA_REC3" onclick="redirectToNextPage('NRA_REC3')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  64: () => (
    <div>
      <h1>Recommendation page: 64</h1>
      <div>
  <div className="option" id="RAT_COM3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat. This program allows you to reach your goal effectively. </p>
    <button data-choice="RAT_COM3" onclick="redirectToNextPage('RAT_COM3')">Choose this option</button>
  </div>
  <div className="option" id="NRA_COM3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat.This program allows you to reach your goal effectively.</p>
    <button data-choice="NRA_COM3" onclick="redirectToNextPage('NRA_COM3')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  65: () => (
    <div>
      <h1>Recommendation page: 65</h1>
      <div>
  <div className="option" id="RAT_AUT3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat. Recommended by Times Higher Education ranking. </p>
    <button data-choice="RAT_AUT3" onclick="redirectToNextPage('RAT_AUT3')">Choose this option</button>
  </div>
  <div className="option" id="NRA_AUT3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat.Recommended by Times Higher Education ranking.</p>
    <button data-choice="NRA_AUT3" onclick="redirectToNextPage('NRA_AUT3')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  66: () => (
    <div>
      <h1>Recommendation page: 66</h1>
      <div>
  <div className="option" id="RAT_SOC3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.People in your age group with a <span id="education" /> prefer this program. </p>
    <button data-choice="RAT_SOC3" onclick="redirectToNextPage('RAT_SOC3')">Choose this option</button>
  </div>
  <div className="option" id="NRA_SOC3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat.People in your age group with a <span id="education" /> prefer this program.</p>
    <button data-choice="NRA_SOC3" onclick="redirectToNextPage('NRA_SOC3')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  67: () => (
    <div>
      <h1>Recommendation page: 67</h1>
      <div>
  <div className="option" id="RAT_LIK3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.Rated highly by your friend <span id="bestFriend"> </span> </p>
    <button data-choice="RAT_LIK3" onclick="redirectToNextPage('RAT_LIK3')">Choose this option</button>
  </div>
  <div className="option" id="NRA_LIK3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat.Rated highly by your friend <span id="bestFriend"> </span></p>
    <button data-choice="NRA_LIK3" onclick="redirectToNextPage('NRA_LIK3')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  68: () => (
    <div>
      <h1>Recommendation page: 68</h1>
      <div>
  <div className="option" id="RAT_SCA3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat. Only 3 slots left, limited time offer! </p>
    <button data-choice="RAT_SCA3" onclick="redirectToNextPage('RAT_SCA3')">Choose this option</button>
  </div>
  <div className="option" id="NRA_SCA3">
    {/* Placeholder for recommendation details */}
    <p>Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat. Only 3 slots left, limited time offer!</p>
    <button data-choice="NRA_SCA3" onclick="redirectToNextPage('NRA_SCA3')">Choose this option</button>
  </div>
</div>

    </div>
  ),
  69: () => (
    <div>
      <h1>Recommendation page: 69</h1>
    </div>
  ),
  70: () => (
    <div>
      <h1>Recommendation page: 70</h1>
    </div>
  ),
  71: () => (
    <div>
      <h1>Recommendation page: 71</h1>
    </div>
  ),
  72: () => (
    <div>
      <h1>Recommendation page: 72</h1>
    </div>
  ),
  73: () => (
    <div>
      <h1>Recommendation page: 73</h1>
    </div>
  ),
  74: () => (
    <div>
      <h1>Recommendation page: 74</h1>
    </div>
  ),
  75: () => (
    <div>
      <h1>Recommendation page: 75</h1>
    </div>
  ),
  76: () => (
    <div>
      <h1>Recommendation page: 76</h1>
    </div>
  ),
  77: () => (
    <div>
      <h1>Recommendation page: 77</h1>
    </div>
  ),
  78: () => (
    <div>
      <h1>Recommendation page: 78</h1>
    </div>
  ),
  79: () => (
    <div>
      <h1>Recommendation page: 79</h1>
    </div>
  ),
  80: () => (
    <div>
      <h1>Recommendation page: 80</h1>
    </div>
  ),
  81: () => (
    <div>
      <h1>Recommendation page: 81</h1>
    </div>
  ),
  82: () => (
    <div>
      <h1>Recommendation page: 82</h1>
    </div>
  ),
  83: () => (
    <div>
      <h1>Recommendation page: 83</h1>
    </div>
  ),
  84: () => (
    <div>
      <h1>Recommendation page: 84</h1>
    </div>
  ),
  85: () => (
    <div>
      <h1>Recommendation page: 85</h1>
    </div>
  ),
  86: () => (
    <div>
      <h1>Recommendation page: 86</h1>
    </div>
  ),
  87: () => (
    <div>
      <h1>Recommendation page: 87</h1>
    </div>
  ),
  88: () => (
    <div>
      <h1>Recommendation page: 88</h1>
    </div>
  ),
  89: () => (
    <div>
      <h1>Recommendation page: 89</h1>
    </div>
  ),
  90: () => (
    <div>
      <h1>Recommendation page: 90</h1>
    </div>
  ),
  91: () => (
    <div>
      <h1>Recommendation page: 91</h1>
    </div>
  ),
  92: () => (
    <div>
      <h1>Recommendation page: 92</h1>
    </div>
  ),
  93: () => (
    <div>
      <h1>Recommendation page: 93</h1>
    </div>
  ),
};

export default function Recommendations() {
  const pages = useRandomPageRange();
  const setActivePage = useAppState((s) => s.setActivePage);
  const activeRandomPageIndex = useAppState((s) => s.activeRandomPageIndex);
  const setActiveRandomPageIndex = useAppState((s) => s.setActiveRandomPageIndex);
  const onNavigation = () => {
    if (activeRandomPageIndex < pages.length - 1) {
      setActiveRandomPageIndex(activeRandomPageIndex + 1);
    } else {
      setActivePage('feedback');
    }
  };
  return (
    <div>
      {/* @ts-expect-error it renders anyway */}
      {pages[activeRandomPageIndex] && recommendation[pages[activeRandomPageIndex]]()}
      <button type="submit" onClick={onNavigation}>
        {activeRandomPageIndex < pages.length - 1 ? 'Next Random page' : 'feedback page'}
      </button>
    </div>
  );
}
