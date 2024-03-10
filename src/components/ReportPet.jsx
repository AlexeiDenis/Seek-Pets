import PreviewImage from "./PreviewImage"
import { Form } from "react-router-dom"
export default function ReportPet(){
    return(
        <>
        <Form method="post" action="/">

        <input type="radio" id="contactChoice1" name="contact" value="lost" defaultChecked />
      <label htmlFor="contactChoice1">Email</label>

      <input type="radio" id="contactChoice2" name="contact" value="found" />
      <label htmlFor="contactChoice2">Phone</label>

        <PreviewImage/>
        </Form>
       
        </>
    )
}