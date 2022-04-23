import React, { Component } from "react";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <>
          <p>
            Wrap a pair of <code>{`<Input>`}</code> and <code>{`<Label>`}</code>{" "}
            components in <code>{`<FormGroup floating>`}</code> to enable
            floating labels with Bootstrap’s textual form fields. A{" "}
            <code>placeholder</code> is required on each{" "}
            <code>{`<Input>`}</code> as our method of CSS-only floating labels
            uses the <code>:placeholder-shown</code> pseudo-element. Also note
            that the <code>{`<Input>`}</code> must come first so we can utilize
            a sibling selector (e.g., <code>~</code>
            ).
          </p>
          <Form inline>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <Button>Submit</Button>
          </Form>
        </>
      </div>
    );
  }
}
