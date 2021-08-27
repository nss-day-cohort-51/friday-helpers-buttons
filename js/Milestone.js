export const Milestone = (obj) => {
	return `
	<article>
          <h2>${obj.event}</h2>
          <p>${obj.year}</p>
		  <p>${obj.women}</p>
		  <p>${obj.fact}</p>
          <p id="showmore--${obj.id}">Show More</p> 
          <p id="delete--${obj.id}">Delete</p>
    </article>
	`
}