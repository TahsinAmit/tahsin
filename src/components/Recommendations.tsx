import { InstructionProps } from '../@types';
import { useAppState } from '../state/state';
import { useRandomPageRange } from '../utils';

const recommendation = {
  1: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 1</h1>
      <div className="option" id="RAT_REC1">
        {/* Placeholder for recommendation details */}
        <p>
          Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
          {instructionValues.seatPreference} seat. Enjoy a complementary drink.
        </p>
        <button data-choice="RAT_REC1" onClick={() => onClick('RAT_REC1')}>
          Choose this option
        </button>
      </div>
      <div className="option" id="NRA_REC1">
        {/* Placeholder for recommendation details */}
        <p>
          Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
          {instructionValues.seatPreference} seat. Enjoy a complementary drink.
        </p>
        <button data-choice="NRA_REC1" onClick={() => onClick('NRA_REC1')}>
          Choose this option
        </button>
      </div>
    </div>
  ),
  2: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 2</h1>
      <div>
        <div className="option" id="RAT_COM1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Stay committed to your green goals.
          </p>
          <button data-choice="RAT_COM1" onClick={() => onClick('RAT_COM1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_COM1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Stay committed to your green goals.
          </p>
          <button data-choice="NRA_COM1" onClick={() => onClick('NRA_COM1')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  3: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 3</h1>
      <div>
        <div className="option" id="RAT_AUT1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Endorsed by your <span id="authorityFigureOutput" />.
          </p>
          <button data-choice="RAT_AUT1" onClick={() => onClick('RAT_AUT1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_AUT1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Endorsed by your <span id="authorityFigureOutput" />.
          </p>
          <button data-choice="NRA_AUT1" onClick={() => onClick('NRA_AUT1')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  4: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 4</h1>
      <div>
        <div className="option" id="RAT_SOC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Highly rated by people in the same income level groups as you.
          </p>
          <button data-choice="RAT_SOC1" onClick={() => onClick('RAT_SOC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SOC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Highly rated by people in the same income level groups as you.
          </p>
          <button data-choice="NRA_SOC1" onClick={() => onClick('NRA_SOC1')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  5: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 5</h1>
      <div>
        <div className="option" id="RAT_LIK1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Also preferred by your friend <span id="bestFriendOutput" />.
          </p>
          <button data-choice="RAT_LIK1" onClick={() => onClick('RAT_LIK1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_LIK1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Also preferred by your friend <span id="bestFriendOutput" />.
          </p>
          <button data-choice="NRA_LIK1" onClick={() => onClick('NRA_LIK1')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  6: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 6</h1>
      <div>
        <div className="option" id="RAT_SCA1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Exclusive offer ending soon. We only have 3 seats left!
          </p>
          <button data-choice="RAT_SCA1" onClick={() => onClick('RAT_SCA1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SCA1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Exclusive offer ending soon. We only have 3 seats left!
          </p>
          <button data-choice="NRA_SCA1" onClick={() => onClick('NRA_SCA1')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  7: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 7</h1>
      <div>
        <div className="option" id="SR_REC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_REC1" onClick={() => onClick('SR_REC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="REC1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Enjoy a complementary drink.
          </p>
          <button data-choice="REC1_SR" onClick={() => onClick('REC1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  8: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 8</h1>
      <div>
        <div className="option" id="SR_COM1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_COM1" onClick={() => onClick('SR_COM1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="COM1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Stay committed to your green goals.
          </p>
          <button data-choice="COM1_SR" onClick={() => onClick('COM1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  9: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 9</h1>
      <div>
        <div className="option" id="SR_AUT1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_AUT1" onClick={() => onClick('SR_AUT1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="AUT1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Endorsed by your <span id="authorityFigureOutput" />.
          </p>
          <button data-choice="AUT1_SR" onClick={() => onClick('AUT1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  10: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 10</h1>
      <div>
        <div className="option" id="SR_SOC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_SOC1" onClick={() => onClick('SR_SOC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SOC1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Highly rated by people in the same income level groups as you.
          </p>
          <button data-choice="SOC1_SR" onClick={() => onClick('SOC1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  11: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 11</h1>
      <div>
        <div className="option" id="SR_LIK1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_LIK1" onClick={() => onClick('SR_LIK1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="LIK1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Also preferred by your friend <span id="bestFriendOutput" />.{' '}
          </p>
          <button data-choice="LIK1_SR" onClick={() => onClick('LIK1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  12: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 12</h1>
      <div>
        <div className="option" id="SR_SCA1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_SCA1" onClick={() => onClick('SR_SCA1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SCA1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Exclusive offer ending soon. We only have 3 seats left!{' '}
          </p>
          <button data-choice="SCA1_SR" onClick={() => onClick('SCA1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  13: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 13</h1>
      <div>
        <div className="option" id="SR_NRA_REC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_NRA_REC1" onClick={() => onClick('SR_NRA_REC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_REC1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Enjoy a complementary drink.{' '}
          </p>
          <button data-choice="NRA_REC1_SR" onClick={() => onClick('NRA_REC1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  14: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 14</h1>
      <div>
        <div className="option" id="SR_NRA_COM1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_NRA_COM1" onClick={() => onClick('SR_NRA_COM1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_COM1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Stay committed to your green goals.{' '}
          </p>
          <button data-choice="NRA_COM1_SR" onClick={() => onClick('NRA_COM1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  15: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 15</h1>
      <div>
        <div className="option" id="SR_NRA_AUT1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_NRA_AUT1" onClick={() => onClick('SR_NRA_AUT1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_AUT1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Endorsed by your <span id="authorityFigureOutput" />.{' '}
          </p>
          <button data-choice="NRA_AUT1_SR" onClick={() => onClick('NRA_AUT1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  16: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 16</h1>
      <div>
        <div className="option" id="SR_NRA_SOC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_NRA_SOC1" onClick={() => onClick('SR_NRA_SOC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SOC1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Highly rated by people in the same income level groups as you.{' '}
          </p>
          <button data-choice="NRA_SOC1_SR" onClick={() => onClick('NRA_SOC1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  17: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 17</h1>
      <div>
        <div className="option" id="SR_NRA_LIK1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_NRA_LIK1" onClick={() => onClick('SR_NRA_LIK1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_LIK1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Also preferred by your friend <span id="bestFriendOutput" />.{' '}
          </p>
          <button data-choice="NRA_LIK1_SR" onClick={() => onClick('NRA_LIK1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  18: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 18</h1>
      <div>
        <div className="option" id="SR_NRA_SCA1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****
          </p>
          <button data-choice="SR_NRA_SCA1" onClick={() => onClick('SR_NRA_SCA1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SCA1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Exclusive offer ending soon. We only have 3 seats left!{' '}
          </p>
          <button data-choice="NRA_SCA1_SR" onClick={() => onClick('NRA_SCA1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  19: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 19</h1>
      <div>
        <div className="option" id="SM_REC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_REC1" onClick={() => onClick('SM_REC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="REC1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Enjoy a complementary drink.{' '}
          </p>
          <button data-choice="REC1_SM" onClick={() => onClick('REC1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  20: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 20</h1>
      <div>
        <div className="option" id="SM_COM1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_COM1" onClick={() => onClick('SM_COM1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="COM1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Stay committed to your green goals.{' '}
          </p>
          <button data-choice="COM1_SM" onClick={() => onClick('COM1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  21: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 21</h1>
      <div>
        <div className="option" id="SM_AUT1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_AUT1" onClick={() => onClick('SM_AUT1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="AUT1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Endorsed by your <span id="authorityFigureOutput" />.{' '}
          </p>
          <button data-choice="AUT1_SM" onClick={() => onClick('AUT1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  22: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 22</h1>
      <div>
        <div className="option" id="SM_SOC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_SOC1" onClick={() => onClick('SM_SOC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SOC1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Highly rated by people in the same income level groups as you.{' '}
          </p>
          <button data-choice="SOC1_SM" onClick={() => onClick('SOC1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  23: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 23</h1>
      <div>
        <div className="option" id="SM_LIK1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_LIK1" onClick={() => onClick('SM_LIK1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="LIK1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Also preferred by your friend <span id="bestFriendOutput" />.{' '}
          </p>
          <button data-choice="LIK1_SM" onClick={() => onClick('LIK1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  24: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 24</h1>
      <div>
        <div className="option" id="SM_SCA1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_SCA1" onClick={() => onClick('SM_SCA1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SCA1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to <span id="destinationB" /> for <span id="priceA" /> on an{' '}
            {instructionValues.seatPreference} seat. Exclusive offer ending soon. We only have 3 seats left!{' '}
          </p>
          <button data-choice="SCA1_SM" onClick={() => onClick('SCA1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  25: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 25</h1>
      <div>
        <div className="option" id="SM_NRA_REC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_NRA_REC1" onClick={() => onClick('SM_NRA_REC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_REC1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Enjoy a complementary drink.{' '}
          </p>
          <button data-choice="NRA_REC1_SM" onClick={() => onClick('NRA_REC1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  26: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 26</h1>
      <div>
        <div className="option" id="SM_NRA_COM1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_NRA_COM1" onClick={() => onClick('SM_NRA_COM1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_COM1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Stay committed to your green choice.{' '}
          </p>
          <button data-choice="NRA_COM1_SM" onClick={() => onClick('NRA_COM1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  27: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 27</h1>
      <div>
        <div className="option" id="SM_NRA_AUT1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_NRA_AUT1" onClick={() => onClick('SM_NRA_AUT1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_AUT1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Endorsed by your <span id="authorityFigureOutput" />.{' '}
          </p>
          <button data-choice="NRA_AUT1_SM" onClick={() => onClick('NRA_AUT1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  28: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 28</h1>
      <div>
        <div className="option" id="SM_NRA_SOC1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_NRA_SOC1" onClick={() => onClick('SM_NRA_SOC1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SOC1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Highly rated by people in the same income level groups as you.{' '}
          </p>
          <button data-choice="NRA_SOC1_SM" onClick={() => onClick('NRA_SOC1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  29: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 29</h1>
      <div>
        <div className="option" id="SM_NRA_LIK1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_NRA_LIK1" onClick={() => onClick('SM_NRA_LIK1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_LIK1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Also preferred by your friend <span id="bestFriendOutput" />.{' '}
          </p>
          <button data-choice="NRA_LIK1_SM" onClick={() => onClick('NRA_LIK1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  30: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 30</h1>
      <div>
        <div className="option" id="SM_NRA_SCA1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.
          </p>
          <button data-choice="SM_NRA_SCA1" onClick={() => onClick('SM_NRA_SCA1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SCA1_SM">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. Exclusive offer ending soon. We only have 3 seats left!{' '}
          </p>
          <button data-choice="NRA_SCA1_SM" onClick={() => onClick('NRA_SCA1_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  31: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 31</h1>
      <div>
        <div className="option" id="SR_SM1">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat. *****{' '}
          </p>
          <button data-choice="SR_SM1" onClick={() => onClick('SR_SM1')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SM1_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Direct flight to {instructionValues.preferredDestination} for {instructionValues.budget} on an{' '}
            {instructionValues.seatPreference} seat.{' '}
          </p>
          <button data-choice="SM1_SR" onClick={() => onClick('SM1_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  32: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 32</h1>
      <div id="recommendations" className="flex-container">
        <div className="option" id="RAT_REC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Get a free nutrition guide.
          </p>
          <button data-choice="RAT_REC2" onClick={() => onClick('RAT_REC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_REC2">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Get a free nutrition guide.
          </p>
          <button data-choice="NRA_REC2" onClick={() => onClick('NRA_REC2')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  33: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 33</h1>
      <div>
        <div className="option" id="RAT_COM2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. This plan allows to reach
            your fitness goal effectively.
          </p>
          <button data-choice="RAT_COM2" onClick={() => onClick('RAT_COM2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_COM2">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness
            goal effectively.
          </p>
          <button data-choice="NRA_COM2" onClick={() => onClick('NRA_COM2')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  34: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 34</h1>
      <div>
        <div className="option" id="RAT_AUT2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}
            .This program is compliant with your health insurance provider.{' '}
          </p>
          <button data-choice="RAT_AUT2" onClick={() => onClick('RAT_AUT2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_AUT2">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This program is compliant with your
            health insurance provider.
          </p>
          <button data-choice="NRA_AUT2" onClick={() => onClick('NRA_AUT2')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  35: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 35</h1>
      <div>
        <div className="option" id="RAT_SOC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}
            .Trusted by other students from your area.{' '}
          </p>
          <button data-choice="RAT_SOC2" onClick={() => onClick('RAT_SOC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SOC2">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Trusted by other students from your
            area.
          </p>
          <button data-choice="NRA_SOC2" onClick={() => onClick('NRA_SOC2')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  36: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 36</h1>
      <div>
        <div className="option" id="RAT_LIK2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}
            .Recommended by your friend X.{' '}
          </p>
          <button data-choice="RAT_LIK2" onClick={() => onClick('RAT_LIK2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_LIK2">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Recommended by your friend X.
          </p>
          <button data-choice="NRA_LIK2" onClick={() => onClick('NRA_LIK2')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  37: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 37</h1>
      <div>
        <div className="option" id="RAT_SCA2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}
            .Available for a limited time. 5 out of 50 passes left only!{' '}
          </p>
          <button data-choice="RAT_SCA2" onClick={() => onClick('RAT_SCA2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SCA2">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of
            50 passes left only!{' '}
          </p>
          <button data-choice="NRA_SCA2" onClick={() => onClick('NRA_SCA2')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  38: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 38</h1>
      <div>
        <div className="option" id="SR_REC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_REC2" onClick={() => onClick('SR_REC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="REC2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Get a free nutrition guide.{' '}
          </p>
          <button data-choice="REC2_SR" onClick={() => onClick('REC2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  39: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 39</h1>
      <div>
        <div className="option" id="SR_COM2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_COM2" onClick={() => onClick('SR_COM2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="COM2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. This plan allows to reach
            your fitness goal effectively.{' '}
          </p>
          <button data-choice="COM2_SR" onClick={() => onClick('COM2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  40: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 40</h1>
      <div>
        <div className="option" id="SR_AUT2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_AUT2" onClick={() => onClick('SR_AUT2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="AUT2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. This program is compliant
            with your health insurance provider.{' '}
          </p>
          <button data-choice="AUT2_SR" onClick={() => onClick('AUT2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  41: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 41</h1>
      <div>
        <div className="option" id="SR_SOC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_SOC2" onClick={() => onClick('SR_SOC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SOC2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Trusted by other students
            from your area.{' '}
          </p>
          <button data-choice="SOC2_SR" onClick={() => onClick('SOC2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  42: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 42</h1>
      <div>
        <div className="option" id="SR_LIK2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_LIK2" onClick={() => onClick('SR_LIK2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="LIK2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Recommended by your friend
            X.{' '}
          </p>
          <button data-choice="LIK2_SR" onClick={() => onClick('LIK2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  43: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 43</h1>
      <div>
        <div className="option" id="SR_SCA2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_SCA2" onClick={() => onClick('SR_SCA2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SCA2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Available for a limited
            time. 5 out of 50 passes left only!{' '}
          </p>
          <button data-choice="SCA2_SR" onClick={() => onClick('SCA2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  44: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 44</h1>
      <div>
        <div className="option" id="SR_NRA_REC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_NRA_REC2" onClick={() => onClick('SR_NRA_REC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_REC2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Get a free nutrition guide.{' '}
          </p>
          <button data-choice="NRA_REC2_SR" onClick={() => onClick('NRA_REC2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  45: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 45</h1>
      <div>
        <div className="option" id="SR_NRA_COM2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_NRA_COM2" onClick={() => onClick('SR_NRA_COM2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_COM2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness
            goal effectively.{' '}
          </p>
          <button data-choice="NRA_COM2_SR" onClick={() => onClick('NRA_COM2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  46: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 46</h1>
      <div>
        <div className="option" id="SR_NRA_AUT2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_NRA_AUT2" onClick={() => onClick('SR_NRA_AUT2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_AUT2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This program is compliant with your
            health insurance provider.{' '}
          </p>
          <button data-choice="NRA_AUT2_SR" onClick={() => onClick('NRA_AUT2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  47: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 47</h1>
      <div>
        <div className="option" id="SR_NRA_SOC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_NRA_SOC2" onClick={() => onClick('SR_NRA_SOC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SOC2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Trusted by other students from your
            area.{' '}
          </p>
          <button data-choice="NRA_SOC2_SR" onClick={() => onClick('NRA_SOC2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  48: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 48</h1>
      <div>
        <div className="option" id="SR_NRA_LIK2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_NRA_LIK2" onClick={() => onClick('SR_NRA_LIK2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_LIK2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Recommended by your friend X.{' '}
          </p>
          <button data-choice="NRA_LIK2_SR" onClick={() => onClick('NRA_LIK2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  49: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 49</h1>
      <div>
        <div className="option" id="SR_NRA_SCA2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. *****{' '}
          </p>
          <button data-choice="SR_NRA_SCA2" onClick={() => onClick('SR_NRA_SCA2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SCA2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of
            50 passes left only!{' '}
          </p>
          <button data-choice="NRA_SCA2_SR" onClick={() => onClick('NRA_SCA2_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  50: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 50</h1>
      <div>
        <div className="option" id="SM_REC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_REC2" onClick={() => onClick('SM_REC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="REC2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Get a free nutrition guide.{' '}
          </p>
          <button data-choice="REC2_SM" onClick={() => onClick('REC2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  51: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 51</h1>
      <div>
        <div className="option" id="SM_COM2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_COM2" onClick={() => onClick('SM_COM2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="COM2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. This plan allows to reach
            your fitness goal effectively.{' '}
          </p>
          <button data-choice="COM2_SM" onClick={() => onClick('COM2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  52: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 52</h1>
      <div>
        <div className="option" id="SM_AUT2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_AUT2" onClick={() => onClick('SM_AUT2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="AUT2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. This program is compliant
            with your health insurance provider.{' '}
          </p>
          <button data-choice="AUT2_SM" onClick={() => onClick('AUT2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  53: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 53</h1>
      <div>
        <div className="option" id="SM_SOC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_SOC2" onClick={() => onClick('SM_SOC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SOC2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Trusted by other students
            from your area.
          </p>
          <button data-choice="SOC2_SM" onClick={() => onClick('SOC2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  54: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 54</h1>
      <div>
        <div className="option" id="SM_LIK2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_LIK2" onClick={() => onClick('SM_LIK2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="LIK2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Recommended by your friend
            X.{' '}
          </p>
          <button data-choice="LIK2_SM" onClick={() => onClick('LIK2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  55: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 55</h1>
      <div>
        <div className="option" id="SM_SCA2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_SCA2" onClick={() => onClick('SM_SCA2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SCA2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}. Available for a limited
            time. 5 out of 50 passes left only!{' '}
          </p>
          <button data-choice="SCA2_SM" onClick={() => onClick('SCA2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  56: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 56</h1>
      <div>
        <div className="option" id="SM_NRA_REC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_NRA_REC2" onClick={() => onClick('SM_NRA_REC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_REC2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Get a free nutrition guide.
          </p>
          <button data-choice="NRA_REC2_SM" onClick={() => onClick('NRA_REC2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  57: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 57</h1>
      <div>
        <div className="option" id="SM_NRA_COM2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_NRA_COM2" onClick={() => onClick('SM_NRA_COM2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_COM2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This plan allows to reach your fitness
            goal effectively.
          </p>
          <button data-choice="NRA_COM2_SM" onClick={() => onClick('NRA_COM2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  58: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 58</h1>
      <div>
        <div className="option" id="SM_NRA_AUT2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_NRA_AUT2" onClick={() => onClick('SM_NRA_AUT2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_AUT2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. This program is compliant with your
            health insurance provider.
          </p>
          <button data-choice="NRA_AUT2_SM" onClick={() => onClick('NRA_AUT2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  59: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 59</h1>
      <div>
        <div className="option" id="SM_NRA_SOC2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_NRA_SOC2" onClick={() => onClick('SM_NRA_SOC2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SOC2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Trusted by other students from your
            area.{' '}
          </p>
          <button data-choice="NRA_SOC2_SM" onClick={() => onClick('NRA_SOC2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  60: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 60</h1>
      <div>
        <div className="option" id="SM_NRA_LIK2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_NRA_LIK2" onClick={() => onClick('SM_NRA_LIK2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_LIK2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Recommended by your friend X.{' '}
          </p>
          <button data-choice="NRA_LIK2_SM" onClick={() => onClick('NRA_LIK2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  61: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 61</h1>
      <div>
        <div className="option" id="SM_NRA_SCA2">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM_NRA_SCA2" onClick={() => onClick('SM_NRA_SCA2')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SCA2_SM">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. Available for a limited time. 5 out of
            50 passes left only!{' '}
          </p>
          <button data-choice="NRA_SCA2_SM" onClick={() => onClick('NRA_SCA2_SM')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  62: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 62</h1>
      <div>
        <div className="option" id="SM2_SR">
          {/* Placeholder for recommendation details */}
          <p>
            {instructionValues.sessionsPerWeek} program for {instructionValues.fitnessGoal}.{' '}
          </p>
          <button data-choice="SM2_SR" onClick={() => onClick('SM2_SR')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SR_SM2">
          {/* Placeholder for recommendation details */}
          <p>
            <span id="sessionsPerWeekB" /> program for <span id="fitnessGoal" />. *****{' '}
          </p>
          <button data-choice="SR_SM2" onClick={() => onClick('SR_SM2')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  63: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 63</h1>
      <div>
        <div className="option" id="RAT_REC3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            Get complimentary access to a live Q&amp;A session.
          </p>
          <button data-choice="RAT_REC3" onClick={() => onClick('RAT_REC3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_REC3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat.
            Get complementary accesss to a live Q&amp;A session.
          </p>
          <button data-choice="NRA_REC3" onClick={() => onClick('NRA_REC3')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  64: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 64</h1>
      <div>
        <div className="option" id="RAT_COM3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            This program allows you to reach your goal effectively.{' '}
          </p>
          <button data-choice="RAT_COM3" onClick={() => onClick('RAT_COM3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_COM3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" />{' '}
            seat.This program allows you to reach your goal effectively.
          </p>
          <button data-choice="NRA_COM3" onClick={() => onClick('NRA_COM3')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  65: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 65</h1>
      <div>
        <div className="option" id="RAT_AUT3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            Recommended by Times Higher Education ranking.{' '}
          </p>
          <button data-choice="RAT_AUT3" onClick={() => onClick('RAT_AUT3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_AUT3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" />{' '}
            seat.Recommended by Times Higher Education ranking.
          </p>
          <button data-choice="NRA_AUT3" onClick={() => onClick('NRA_AUT3')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  66: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 66</h1>
      <div>
        <div className="option" id="RAT_SOC3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" />{' '}
            seat.People in your age group with a <span id="education" /> prefer this program.{' '}
          </p>
          <button data-choice="RAT_SOC3" onClick={() => onClick('RAT_SOC3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SOC3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" />{' '}
            seat.People in your age group with a <span id="education" /> prefer this program.
          </p>
          <button data-choice="NRA_SOC3" onClick={() => onClick('NRA_SOC3')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  67: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 67</h1>
      <div>
        <div className="option" id="RAT_LIK3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" />{' '}
            seat.Rated highly by your friend <span id="bestFriend"> </span>{' '}
          </p>
          <button data-choice="RAT_LIK3" onClick={() => onClick('RAT_LIK3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_LIK3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" />{' '}
            seat.Rated highly by your friend <span id="bestFriend"> </span>
          </p>
          <button data-choice="NRA_LIK3" onClick={() => onClick('NRA_LIK3')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  68: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 68</h1>
      <div>
        <div className="option" id="RAT_SCA3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            Only 3 slots left, limited time offer!{' '}
          </p>
          <button data-choice="RAT_SCA3" onClick={() => onClick('RAT_SCA3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="NRA_SCA3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekB" /> seat.
            Only 3 slots left, limited time offer!
          </p>
          <button data-choice="NRA_SCA3" onClick={() => onClick('NRA_SCA3')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  69: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 69</h1>
      <div>
        <div className="option" id="SR_REC3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            *****{' '}
          </p>
          <button data-choice="SR_REC3" onClick={() => onClick('SR_REC3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="REC3_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            Get complimentary access to a live Q&amp;A session.
          </p>
          <button data-choice="REC3_SR" onClick={() => onClick('REC3_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  70: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 70</h1>
      <div>
        <div className="option" id="SR_COM3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            *****{' '}
          </p>
          <button data-choice="SR_COM3" onClick={() => onClick('SR_COM3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="COM3_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            This program allows you to reach your goal effectively.
          </p>
          <button data-choice="COM3_SR" onClick={() => onClick('COM3_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  71: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 71</h1>
      <div>
        <div className="option" id="SR_AUT3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            *****{' '}
          </p>
          <button data-choice="SR_AUT3" onClick={() => onClick('SR_AUT3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="AUT3_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            Recommended by Times Higher Education ranking.
          </p>
          <button data-choice="AUT3_SR" onClick={() => onClick('AUT3_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  72: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 72</h1>
      <div>
        <div className="option" id="SR_SOC3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            *****{' '}
          </p>
          <button data-choice="SR_SOC3" onClick={() => onClick('SR_SOC3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SOC3_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" />{' '}
            seat.People in your age group with a <span id="education" /> prefer this program.
          </p>
          <button data-choice="SOC3_SR" onClick={() => onClick('SOC3_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  73: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 73</h1>
      <div>
        <div className="option" id="SR_LIK3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            *****{' '}
          </p>
          <button data-choice="SR_LIK3" onClick={() => onClick('SR_LIK3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="LIK3_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" />{' '}
            seat.Rated highly by your friend <span id="bestFriend"> </span>
          </p>
          <button data-choice="LIK3_SR" onClick={() => onClick('LIK3_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  74: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 74</h1>
      <div>
        <div className="option" id="SR_SCA3">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            *****{' '}
          </p>
          <button data-choice="SR_SCA3" onClick={() => onClick('SR_SCA3')}>
            Choose this option
          </button>
        </div>
        <div className="option" id="SCA3_SR">
          {/* Placeholder for recommendation details */}
          <p>
            Learn <span id="fieldOfStudyA" /> through <span id="learningMethodsA" /> , <span id="timePerWeekA" /> seat.
            Only 3 slots left, limited time offer!
          </p>
          <button data-choice="SCA3_SR" onClick={() => onClick('SCA3_SR')}>
            Choose this option
          </button>
        </div>
      </div>
    </div>
  ),
  75: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 75</h1>
    </div>
  ),
  76: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 76</h1>
    </div>
  ),
  77: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 77</h1>
    </div>
  ),
  78: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 78</h1>
    </div>
  ),
  79: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 79</h1>
    </div>
  ),
  80: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 80</h1>
    </div>
  ),
  81: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 81</h1>
    </div>
  ),
  82: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 82</h1>
    </div>
  ),
  83: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 83</h1>
    </div>
  ),
  84: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 84</h1>
    </div>
  ),
  85: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 85</h1>
    </div>
  ),
  86: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 86</h1>
    </div>
  ),
  87: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 87</h1>
    </div>
  ),
  88: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 88</h1>
    </div>
  ),
  89: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 89</h1>
    </div>
  ),
  90: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 90</h1>
    </div>
  ),
  91: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 91</h1>
    </div>
  ),
  92: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 92</h1>
    </div>
  ),
  93: ({ onClick, instructionValues }: { onClick: (val: string) => void; instructionValues: InstructionProps }) => (
    <div>
      <h1>Recommendation page: 93</h1>
    </div>
  ),
};

export default function Recommendations() {
  const pages = useRandomPageRange();
  const setActivePage = useAppState((s) => s.setActivePage);
  const instructionValues = useAppState((s) => s.instructionValues);
  const activeRandomPageIndex = useAppState((s) => s.activeRandomPageIndex);
  const setRecommendationValues = useAppState((s) => s.setRecommendationValues);
  const recommendationValues = useAppState((s) => s.recommendationValues);
  const setActiveRandomPageIndex = useAppState((s) => s.setActiveRandomPageIndex);
  const onNavigation = (recommendationValue: string | undefined, toFeedback = false) => {
    if (toFeedback) {
      setActivePage('feedback');
    } else {
      if (recommendationValue) setRecommendationValues(recommendationValue);
      setActiveRandomPageIndex(activeRandomPageIndex + 1);
    }
  };
  return (
    <div>
      {pages[activeRandomPageIndex] &&
        // @ts-expect-error it will work
        recommendation[pages[activeRandomPageIndex]]({ onClick: onNavigation, instructionValues })}
      {activeRandomPageIndex + 1 === pages.length && (
        <button type="submit" onClick={() => onNavigation(undefined, true)}>
          feedback page
        </button>
      )}
      <p>{JSON.stringify(recommendationValues)}</p>
    </div>
  );
}
