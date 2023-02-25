import { Controller } from "@hotwired/stimulus"
// import TypedJs from "type"
import Typed from "type.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Change your life", "Learn to code"],
      typeSpeed: 50,
      loop: true
    })
  }
}
