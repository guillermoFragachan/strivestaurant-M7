import ListGroup from 'react-bootstrap/ListGroup'

interface singleComment{
  id:number,
  comment:string
}


  interface selectedDish  {
    selectedDish: Array<singleComment> | null

  }




const DishComments = ({selectedDish}:selectedDish) => (
  <ListGroup>
    {/* {selectedDish.comments ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )} */}
  </ListGroup>
)

export default DishComments
