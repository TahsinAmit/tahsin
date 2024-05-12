export default function Feedback() {
  return (
    <form id="feedbackForm">
      <div className="form-group">
        <p>I found the flight recommendation provided to me to be trustworthy.</p>
        <label>
          <input type="radio" name="trustworthy" defaultValue={1} /> Strongly
          Disagree
        </label>
        <label>
          <input type="radio" name="trustworthy" defaultValue={2} /> Disagree
        </label>
        <label>
          <input type="radio" name="trustworthy" defaultValue={3} /> Neither Agree
          nor Disagree
        </label>
        <label>
          <input type="radio" name="trustworthy" defaultValue={4} /> Agree
        </label>
        <label>
          <input type="radio" name="trustworthy" defaultValue={5} /> Strongly Agree
        </label>
      </div>
      {/* Ensure 'name' attribute is unique for each question */}
      <div className="form-group">
        <p>
          The source of the recommendation influenced my trust in the suggestion.
        </p>
        {/* Example for a second question with a unique 'name' */}
        <label>
          <input type="radio" name="sourceInfluence" defaultValue={1} /> Strongly
          Disagree
        </label>
        <label>
          <input type="radio" name="sourceInfluence" defaultValue={2} /> Disagree
        </label>
        <label>
          <input type="radio" name="sourceInfluence" defaultValue={3} /> Neither
          Agree nor Disagree
        </label>
        <label>
          <input type="radio" name="sourceInfluence" defaultValue={4} /> Agree
        </label>
        <label>
          <input type="radio" name="sourceInfluence" defaultValue={5} /> Strongly
          Agree
        </label>
      </div>
      {/* Repeat for each statement, changing the 'name' for each to be unique */}
      {/* Example for the last statement to illustrate unique 'name' usage */}
      <div className="form-group">
        <p>
          Based on this experience, I would trust an AI-generated recommendation for
          future travel planning.
        </p>
        <label>
          <input type="radio" name="futureTrust" defaultValue={1} /> Strongly
          Disagree
        </label>
        <label>
          <input type="radio" name="futureTrust" defaultValue={2} /> Disagree
        </label>
        <label>
          <input type="radio" name="futureTrust" defaultValue={3} /> Neither Agree
          nor Disagree
        </label>
        <label>
          <input type="radio" name="futureTrust" defaultValue={4} /> Agree
        </label>
        <label>
          <input type="radio" name="futureTrust" defaultValue={5} /> Strongly Agree
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="likeMost">
          What did you like most about the flight recommendation process?
        </label>
        <textarea id="likeMost" name="likeMost" defaultValue={""} />
      </div>
      <div className="form-group">
        <label htmlFor="suggestions">
          What improvements, if any, would you suggest for the flight recommendation
          process?
        </label>
        <textarea id="suggestions" name="suggestions" defaultValue={""} />
      </div>
      <button type="submit">Submit</button>
    </form>

  );
}
