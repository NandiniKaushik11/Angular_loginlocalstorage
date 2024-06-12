import { Component } from '@angular/core';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.css']
})
export class TechstackComponent {
  courses: string[] = ['Artificial Intelligence : Artificial intelligence, in its broadest sense, is intelligence exhibited by machines, particularly computer systems', 'Theory of Computation : Operations Research; Data Mining and Machine Learning; Cryptography and Computer Security; Probability and Statistics', 'Computer Systems Verification: Complexity Theory; Operations Research; Data Mining and Machine Learning; Cryptography and Computer Security','Data Mining: Data Compression; Soft Computing; Distributing Computing; Mobile Computing; Web Services; Data Mining.','Discrete Mathematics : Discrete mathematics is the study of mathematical structures that can be considered "discrete" rather than "continuous". ','Distributed computing :is a field of computer science that studies distributed systems, defined as computer systems whose inter-communicating components are located on different networked computers.','Programming Languages:A programming language is a system of notation for writing computer programs. Programming languages are described in terms of their syntax and semantics, usually defined by a formal language. Languages usually provide features such as a type system, variables and mechanisms for error handling.','Software engineering : is an engineering approach to software development. A practitioner, a software engineer, applies the engineering design process to develop software. The terms programmer and coder overlap software engineer, but they imply only the construction aspect of typical software engineer workload. '];
}
