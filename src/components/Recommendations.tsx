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
    </div>
  ),
  3: () => (
    <div>
      <h1>Recommendation page: 3</h1>
    </div>
  ),
  4: () => (
    <div>
      <h1>Recommendation page: 4</h1>
    </div>
  ),
  5: () => (
    <div>
      <h1>Recommendation page: 5</h1>
    </div>
  ),
  6: () => (
    <div>
      <h1>Recommendation page: 6</h1>
    </div>
  ),
  7: () => (
    <div>
      <h1>Recommendation page: 7</h1>
    </div>
  ),
  8: () => (
    <div>
      <h1>Recommendation page: 8</h1>
    </div>
  ),
  9: () => (
    <div>
      <h1>Recommendation page: 9</h1>
    </div>
  ),
  10: () => (
    <div>
      <h1>Recommendation page: 10</h1>
    </div>
  ),
  11: () => (
    <div>
      <h1>Recommendation page: 11</h1>
    </div>
  ),
  12: () => (
    <div>
      <h1>Recommendation page: 12</h1>
    </div>
  ),
  13: () => (
    <div>
      <h1>Recommendation page: 13</h1>
    </div>
  ),
  14: () => (
    <div>
      <h1>Recommendation page: 14</h1>
    </div>
  ),
  15: () => (
    <div>
      <h1>Recommendation page: 15</h1>
    </div>
  ),
  16: () => (
    <div>
      <h1>Recommendation page: 16</h1>
    </div>
  ),
  17: () => (
    <div>
      <h1>Recommendation page: 17</h1>
    </div>
  ),
  18: () => (
    <div>
      <h1>Recommendation page: 18</h1>
    </div>
  ),
  19: () => (
    <div>
      <h1>Recommendation page: 19</h1>
    </div>
  ),
  20: () => (
    <div>
      <h1>Recommendation page: 20</h1>
    </div>
  ),
  21: () => (
    <div>
      <h1>Recommendation page: 21</h1>
    </div>
  ),
  22: () => (
    <div>
      <h1>Recommendation page: 22</h1>
    </div>
  ),
  23: () => (
    <div>
      <h1>Recommendation page: 23</h1>
    </div>
  ),
  24: () => (
    <div>
      <h1>Recommendation page: 24</h1>
    </div>
  ),
  25: () => (
    <div>
      <h1>Recommendation page: 25</h1>
    </div>
  ),
  26: () => (
    <div>
      <h1>Recommendation page: 26</h1>
    </div>
  ),
  27: () => (
    <div>
      <h1>Recommendation page: 27</h1>
    </div>
  ),
  28: () => (
    <div>
      <h1>Recommendation page: 28</h1>
    </div>
  ),
  29: () => (
    <div>
      <h1>Recommendation page: 29</h1>
    </div>
  ),
  30: () => (
    <div>
      <h1>Recommendation page: 30</h1>
    </div>
  ),
  31: () => (
    <div>
      <h1>Recommendation page: 31</h1>
    </div>
  ),
  32: () => (
    <div>
      <h1>Recommendation page: 32</h1>
    </div>
  ),
  33: () => (
    <div>
      <h1>Recommendation page: 33</h1>
    </div>
  ),
  34: () => (
    <div>
      <h1>Recommendation page: 34</h1>
    </div>
  ),
  35: () => (
    <div>
      <h1>Recommendation page: 35</h1>
    </div>
  ),
  36: () => (
    <div>
      <h1>Recommendation page: 36</h1>
    </div>
  ),
  37: () => (
    <div>
      <h1>Recommendation page: 37</h1>
    </div>
  ),
  38: () => (
    <div>
      <h1>Recommendation page: 38</h1>
    </div>
  ),
  39: () => (
    <div>
      <h1>Recommendation page: 39</h1>
    </div>
  ),
  40: () => (
    <div>
      <h1>Recommendation page: 40</h1>
    </div>
  ),
  41: () => (
    <div>
      <h1>Recommendation page: 41</h1>
    </div>
  ),
  42: () => (
    <div>
      <h1>Recommendation page: 42</h1>
    </div>
  ),
  43: () => (
    <div>
      <h1>Recommendation page: 43</h1>
    </div>
  ),
  44: () => (
    <div>
      <h1>Recommendation page: 44</h1>
    </div>
  ),
  45: () => (
    <div>
      <h1>Recommendation page: 45</h1>
    </div>
  ),
  46: () => (
    <div>
      <h1>Recommendation page: 46</h1>
    </div>
  ),
  47: () => (
    <div>
      <h1>Recommendation page: 47</h1>
    </div>
  ),
  48: () => (
    <div>
      <h1>Recommendation page: 48</h1>
    </div>
  ),
  49: () => (
    <div>
      <h1>Recommendation page: 49</h1>
    </div>
  ),
  50: () => (
    <div>
      <h1>Recommendation page: 50</h1>
    </div>
  ),
  51: () => (
    <div>
      <h1>Recommendation page: 51</h1>
    </div>
  ),
  52: () => (
    <div>
      <h1>Recommendation page: 52</h1>
    </div>
  ),
  53: () => (
    <div>
      <h1>Recommendation page: 53</h1>
    </div>
  ),
  54: () => (
    <div>
      <h1>Recommendation page: 54</h1>
    </div>
  ),
  55: () => (
    <div>
      <h1>Recommendation page: 55</h1>
    </div>
  ),
  56: () => (
    <div>
      <h1>Recommendation page: 56</h1>
    </div>
  ),
  57: () => (
    <div>
      <h1>Recommendation page: 57</h1>
    </div>
  ),
  58: () => (
    <div>
      <h1>Recommendation page: 58</h1>
    </div>
  ),
  59: () => (
    <div>
      <h1>Recommendation page: 59</h1>
    </div>
  ),
  60: () => (
    <div>
      <h1>Recommendation page: 60</h1>
    </div>
  ),
  61: () => (
    <div>
      <h1>Recommendation page: 61</h1>
    </div>
  ),
  62: () => (
    <div>
      <h1>Recommendation page: 62</h1>
    </div>
  ),
  63: () => (
    <div>
      <h1>Recommendation page: 63</h1>
    </div>
  ),
  64: () => (
    <div>
      <h1>Recommendation page: 64</h1>
    </div>
  ),
  65: () => (
    <div>
      <h1>Recommendation page: 65</h1>
    </div>
  ),
  66: () => (
    <div>
      <h1>Recommendation page: 66</h1>
    </div>
  ),
  67: () => (
    <div>
      <h1>Recommendation page: 67</h1>
    </div>
  ),
  68: () => (
    <div>
      <h1>Recommendation page: 68</h1>
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
