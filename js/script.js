/* ============================================================
   PYTHON PAGE CONTENT
   ============================================================ */
const pythonContent = {
  key: "python",
  title: "Python Programming",
  seoTitle: "Python Programming Tutorial – Learn Python | Coding IndiaTrend",
  seoDesc: "Learn Python programming from basics to advanced concepts with simple explanations, examples, syntax, variables, functions, loops and practical programming tutorials.",
  lede: "Learn Python from the ground up — syntax, data types, functions, OOP and real projects, explained simply.",
  images: [
    { alt: "Python programming code displayed on a screen", q: "python programming code" },
    { alt: "Developer writing Python development code on a laptop", q: "python development laptop" },
    { alt: "Python programming concept illustration with logo", q: "python programming concept" }
  ],
  toc: [
    "About Python","Why Learn Python?","Python Features","Installation","Syntax","Variables",
    "Data Types","Operators","Conditional Statements","Loops","Functions","Lists","Tuples",
    "Dictionaries","Sets","Strings","Exception Handling","File Handling","Modules",
    "Classes and Objects","Inheritance","Python Projects","Career Uses","FAQ"
  ],
  sections: [
    {
      id: "about-python", h: "About Python",
      body: `
        <p>Python is a high-level, general-purpose programming language known for its clean, readable syntax. It was created by <strong>Guido van Rossum</strong> and first released in <strong>1991</strong>. The language was designed to make code easy to read and write, using indentation instead of curly braces to define blocks of code.</p>
        <p>Python's name comes from the British comedy group Monty Python, not the snake — Guido van Rossum was a fan of the show while developing the language.</p>
        <p>Today, Python is used everywhere: web development, data science, artificial intelligence, machine learning, automation, scripting, scientific computing and more. Companies like Google, Instagram, Netflix and Spotify use Python in their technology stacks.</p>
      `
    },
    {
      id: "why-python", h: "Why Learn Python?",
      body: `
        <ul>
          <li><strong>Beginner friendly syntax</strong> — reads almost like plain English.</li>
          <li><strong>AI and Machine Learning</strong> — the dominant language for AI research and production ML systems.</li>
          <li><strong>Data Science</strong> — libraries like pandas, NumPy and Matplotlib make data analysis simple.</li>
          <li><strong>Web Development</strong> — frameworks like Django and Flask power large-scale websites.</li>
          <li><strong>Automation and Scripting</strong> — automate repetitive tasks with a few lines of code.</li>
          <li><strong>Software Development</strong> — used to build desktop apps, tools and backend systems.</li>
        </ul>
      `
    },
    {
      id: "python-features", h: "Python Features",
      body: `
        <ul>
          <li><strong>Easy syntax</strong> — minimal boilerplate, close to natural language.</li>
          <li><strong>Interpreted</strong> — code runs line by line without a separate compilation step.</li>
          <li><strong>High-level</strong> — handles memory management automatically.</li>
          <li><strong>Dynamically typed</strong> — no need to declare variable types explicitly.</li>
          <li><strong>Object-oriented</strong> — supports classes, objects and inheritance.</li>
          <li><strong>Large ecosystem</strong> — hundreds of thousands of packages on PyPI.</li>
          <li><strong>Cross-platform</strong> — runs on Windows, macOS and Linux.</li>
        </ul>
      `
    },
    {
      id: "installation", h: "Python Installation",
      body: `
        <p>To start writing Python code, install Python from the official source:</p>
        <ol>
          <li>Visit <strong>python.org/downloads</strong> and download the latest stable version for your operating system.</li>
          <li>Run the installer. On Windows, check the box that says "Add Python to PATH".</li>
          <li>Verify the installation by opening a terminal and typing <code>python --version</code>.</li>
          <li>Install a code editor such as VS Code to write and run your programs comfortably.</li>
        </ol>
        <div class="callout">Many Linux and macOS systems come with Python pre-installed. Check with <code>python3 --version</code> in the terminal.</div>
      `
    },
    {
      id: "syntax", h: "Python Syntax",
      body: `
        <p>Python uses indentation (spaces) to define code blocks instead of curly braces. This makes the structure of a program visually clear.</p>
        ${codeBlock("python", "hello.py", `<span class="c-fn">print</span>(<span class="c-str">"Hello, World!"</span>)`)}
      `
    },
    {
      id: "variables", h: "Python Variables",
      body: `
        <p>Variables store data values. Python variables don't need an explicit type declaration.</p>
        ${codeBlock("python", "variables.py",
`name = <span class="c-str">"Aarav"</span>
age = <span class="c-kw">25</span>
height = <span class="c-kw">5.9</span>
is_student = <span class="c-kw">True</span>

<span class="c-fn">print</span>(name, age, height, is_student)`)}
      `
    },
    {
      id: "data-types", h: "Python Data Types",
      body: `
        <p>Python has several built-in data types used to store different kinds of values:</p>
        <div class="chip-row">
          <span class="chip">int</span><span class="chip">float</span><span class="chip">str</span>
          <span class="chip">bool</span><span class="chip">list</span><span class="chip">tuple</span>
          <span class="chip">set</span><span class="chip">dict</span>
        </div>
        <table class="ref-table">
          <tr><th>Type</th><th>Example</th><th>Description</th></tr>
          <tr><td>int</td><td>10</td><td>Whole numbers</td></tr>
          <tr><td>float</td><td>10.5</td><td>Decimal numbers</td></tr>
          <tr><td>str</td><td>"hello"</td><td>Text data</td></tr>
          <tr><td>bool</td><td>True / False</td><td>Boolean logic</td></tr>
          <tr><td>list</td><td>[1, 2, 3]</td><td>Ordered, mutable collection</td></tr>
          <tr><td>tuple</td><td>(1, 2, 3)</td><td>Ordered, immutable collection</td></tr>
          <tr><td>set</td><td>{1, 2, 3}</td><td>Unordered, unique values</td></tr>
          <tr><td>dict</td><td>{"key": "value"}</td><td>Key-value pairs</td></tr>
        </table>
      `
    },
    {
      id: "operators", h: "Python Operators",
      body: `
        <p>Python supports several categories of operators:</p>
        <ul>
          <li><strong>Arithmetic:</strong> + - * / % ** //</li>
          <li><strong>Comparison:</strong> == != &gt; &lt; &gt;= &lt;=</li>
          <li><strong>Logical:</strong> and, or, not</li>
          <li><strong>Assignment:</strong> = += -= *= /=</li>
          <li><strong>Membership:</strong> in, not in</li>
          <li><strong>Identity:</strong> is, is not</li>
          <li><strong>Bitwise:</strong> &amp; | ^ ~ &lt;&lt; &gt;&gt;</li>
        </ul>
      `
    },
    {
      id: "conditionals", h: "Conditional Statements",
      body: `
        <p>Conditional statements let a program make decisions using <code>if</code>, <code>elif</code> and <code>else</code>.</p>
        ${codeBlock("python", "conditions.py",
`age = <span class="c-kw">18</span>

<span class="c-kw">if</span> age &gt;= <span class="c-kw">18</span>:
    <span class="c-fn">print</span>(<span class="c-str">"You are an adult"</span>)
<span class="c-kw">elif</span> age &gt; <span class="c-kw">12</span>:
    <span class="c-fn">print</span>(<span class="c-str">"You are a teenager"</span>)
<span class="c-kw">else</span>:
    <span class="c-fn">print</span>(<span class="c-str">"You are a child"</span>)`)}
      `
    },
    {
      id: "loops", h: "Loops",
      body: `
        <p>Python provides <code>for</code> and <code>while</code> loops, along with <code>break</code> and <code>continue</code> to control flow.</p>
        ${codeBlock("python", "loops.py",
`<span class="c-comment"># for loop</span>
<span class="c-kw">for</span> i <span class="c-kw">in</span> <span class="c-fn">range</span>(<span class="c-kw">5</span>):
    <span class="c-fn">print</span>(i)

<span class="c-comment"># while loop</span>
count = <span class="c-kw">0</span>
<span class="c-kw">while</span> count &lt; <span class="c-kw">5</span>:
    <span class="c-fn">print</span>(count)
    count += <span class="c-kw">1</span>`)}
      `
    },
    {
      id: "functions", h: "Functions",
      body: `
        <p>Functions are defined using <code>def</code> and can accept parameters and return values.</p>
        ${codeBlock("python", "functions.py",
`<span class="c-kw">def</span> <span class="c-fn">greet</span>(name):
    <span class="c-kw">return</span> <span class="c-str">f"Hello, {name}!"</span>

message = <span class="c-fn">greet</span>(<span class="c-str">"Riya"</span>)
<span class="c-fn">print</span>(message)`)}
      `
    },
    {
      id: "lists", h: "Lists",
      body: `
        <p>Lists are ordered, mutable collections that can hold mixed data types.</p>
        ${codeBlock("python", "lists.py",
`fruits = [<span class="c-str">"apple"</span>, <span class="c-str">"banana"</span>, <span class="c-str">"mango"</span>]
fruits.<span class="c-fn">append</span>(<span class="c-str">"grape"</span>)
<span class="c-fn">print</span>(fruits[<span class="c-kw">0</span>])
<span class="c-fn">print</span>(<span class="c-fn">len</span>(fruits))`)}
      `
    },
    {
      id: "tuples", h: "Tuples",
      body: `
        <p>Tuples are like lists, but immutable — once created, their values cannot be changed.</p>
        ${codeBlock("python", "tuples.py",
`coordinates = (<span class="c-kw">10</span>, <span class="c-kw">20</span>)
<span class="c-fn">print</span>(coordinates[<span class="c-kw">0</span>])`)}
      `
    },
    {
      id: "dictionaries", h: "Dictionaries",
      body: `
        <p>Dictionaries store data as key-value pairs, useful for structured data.</p>
        ${codeBlock("python", "dict.py",
`student = {
    <span class="c-str">"name"</span>: <span class="c-str">"Kabir"</span>,
    <span class="c-str">"age"</span>: <span class="c-kw">21</span>
}
<span class="c-fn">print</span>(student[<span class="c-str">"name"</span>])`)}
      `
    },
    {
      id: "sets", h: "Sets",
      body: `
        <p>Sets store unique, unordered values. Duplicate entries are automatically removed.</p>
        ${codeBlock("python", "sets.py",
`numbers = {<span class="c-kw">1</span>, <span class="c-kw">2</span>, <span class="c-kw">2</span>, <span class="c-kw">3</span>}
<span class="c-fn">print</span>(numbers)  <span class="c-comment"># {1, 2, 3}</span>`)}
      `
    },
    {
      id: "strings", h: "Strings",
      body: `
        <p>Strings represent text and support many built-in methods for manipulation.</p>
        ${codeBlock("python", "strings.py",
`text = <span class="c-str">"Coding IndiaTrend"</span>
<span class="c-fn">print</span>(text.<span class="c-fn">upper</span>())
<span class="c-fn">print</span>(text.<span class="c-fn">lower</span>())
<span class="c-fn">print</span>(<span class="c-fn">len</span>(text))`)}
      `
    },
    {
      id: "exceptions", h: "Exception Handling",
      body: `
        <p>Python handles runtime errors gracefully using <code>try</code>, <code>except</code> and <code>finally</code>.</p>
        ${codeBlock("python", "exceptions.py",
`<span class="c-kw">try</span>:
    result = <span class="c-kw">10</span> / <span class="c-kw">0</span>
<span class="c-kw">except</span> ZeroDivisionError:
    <span class="c-fn">print</span>(<span class="c-str">"Cannot divide by zero"</span>)
<span class="c-kw">finally</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Execution complete"</span>)`)}
      `
    },
    {
      id: "file-handling", h: "File Handling",
      body: `
        <p>Python can read and write files using the built-in <code>open()</code> function.</p>
        ${codeBlock("python", "files.py",
`<span class="c-kw">with</span> <span class="c-fn">open</span>(<span class="c-str">"data.txt"</span>, <span class="c-str">"w"</span>) <span class="c-kw">as</span> f:
    f.<span class="c-fn">write</span>(<span class="c-str">"Hello File!"</span>)

<span class="c-kw">with</span> <span class="c-fn">open</span>(<span class="c-str">"data.txt"</span>, <span class="c-str">"r"</span>) <span class="c-kw">as</span> f:
    <span class="c-fn">print</span>(f.<span class="c-fn">read</span>())`)}
      `
    },
    {
      id: "modules", h: "Modules",
      body: `
        <p>Modules let you organise code into reusable files and import functionality with <code>import</code>.</p>
        ${codeBlock("python", "modules.py",
`<span class="c-kw">import</span> math

<span class="c-fn">print</span>(math.sqrt(<span class="c-kw">16</span>))`)}
      `
    },
    {
      id: "classes", h: "Classes and Objects",
      body: `
        <p>Python is object-oriented — you can define classes that bundle data and behaviour together.</p>
        ${codeBlock("python", "classes.py",
`<span class="c-kw">class</span> Student:
    <span class="c-kw">def</span> <span class="c-fn">__init__</span>(self, name):
        self.name = name

    <span class="c-kw">def</span> <span class="c-fn">greet</span>(self):
        <span class="c-kw">return</span> <span class="c-str">f"Hi, I'm {self.name}"</span>

s = Student(<span class="c-str">"Meera"</span>)
<span class="c-fn">print</span>(s.<span class="c-fn">greet</span>())`)}
      `
    },
    {
      id: "inheritance", h: "Inheritance",
      body: `
        <p>Inheritance allows a class to reuse the properties and methods of another class.</p>
        ${codeBlock("python", "inheritance.py",
`<span class="c-kw">class</span> Animal:
    <span class="c-kw">def</span> <span class="c-fn">speak</span>(self):
        <span class="c-fn">print</span>(<span class="c-str">"Animal speaks"</span>)

<span class="c-kw">class</span> Dog(Animal):
    <span class="c-kw">def</span> <span class="c-fn">speak</span>(self):
        <span class="c-fn">print</span>(<span class="c-str">"Dog barks"</span>)

d = Dog()
d.<span class="c-fn">speak</span>()`)}
      `
    },
    {
      id: "projects", h: "Python Projects",
      body: `
        <p>Practice with these beginner-friendly project ideas:</p>
        <div class="project-grid">
          <div class="project-item"><h4>To-Do List App</h4><p>Manage tasks using lists and file storage.</p></div>
          <div class="project-item"><h4>Number Guessing Game</h4><p>Use loops, conditionals and random numbers.</p></div>
          <div class="project-item"><h4>Simple Calculator</h4><p>Practice functions and user input handling.</p></div>
          <div class="project-item"><h4>Password Generator</h4><p>Combine strings, randomness and logic.</p></div>
          <div class="project-item"><h4>Contact Book</h4><p>Store and search contacts using dictionaries.</p></div>
          <div class="project-item"><h4>Weather CLI Tool</h4><p>Practice working with external APIs.</p></div>
        </div>
      `
    },
    {
      id: "career", h: "Python Career Uses",
      body: `
        <p>Python skills open doors to careers in software development, data science, machine learning engineering, backend web development, automation and DevOps, and research. It's one of the most in-demand languages in the job market today.</p>
      `
    },
    {
      id: "faq", h: "Python FAQ",
      body: `
        ${faqBlock([
          ["Is Python good for beginners?", "Yes. Python's clean, readable syntax makes it one of the most beginner-friendly programming languages available."],
          ["How long does it take to learn Python basics?", "With consistent practice, most beginners understand Python fundamentals within 4–8 weeks."],
          ["Is Python used in AI and Machine Learning?", "Yes, Python is the dominant language for AI and ML thanks to libraries like TensorFlow, PyTorch and scikit-learn."],
          ["Can Python be used for web development?", "Yes, using frameworks like Django and Flask, Python can build full backend web applications."],
          ["Do I need to know C or C++ before Python?", "No. Python can be learned as a first programming language without prior experience."],
          ["Is Python free to learn and use?", "Yes, Python is completely free and open source."],
          ["What can I build after learning Python basics?", "You can build automation scripts, simple games, web apps, data analysis tools and more."],
          ["Which companies use Python?", "Google, Instagram, Netflix, Spotify and many other major technology companies use Python."]
        ])}
      `
    }
  ],
  related: [
    { label: "Also learn C", url: "/c" },
    { label: "Also learn C++", url: "/cpp" }
  ]
};
/* ============================================================
   C PAGE CONTENT
   ============================================================ */
const cContent = {
  key: "c",
  title: "C Programming",
  seoTitle: "C Programming Tutorial – Learn C Programming | Coding IndiaTrend",
  seoDesc: "Learn C programming from basics with simple explanations of syntax, variables, data types, operators, conditions, loops, functions, arrays, pointers and structures.",
  lede: "Learn C from the ground up — the language that shaped modern computing, explained with simple examples.",
  images: [
    { alt: "C programming code shown in a text editor", q: "c programming code editor" },
    { alt: "C programming development on a computer screen", q: "c programming development" },
    { alt: "C programming concept with compiler and syntax", q: "c programming concept compiler" }
  ],
  toc: [
    "About C","Why Learn C?","Features of C","Installation","First C Program","Syntax","Variables",
    "Data Types","Constants","Operators","If / Else","Switch","For Loop","While Loop","Do While Loop",
    "Functions","Arrays","Strings","Pointers","Structures","Unions","Enumerations","Dynamic Memory",
    "File Handling","C Projects","Career Uses","FAQ"
  ],
  sections: [
    {
      id: "about-c", h: "About C",
      body: `
        <p>C is a general-purpose, procedural programming language created by <strong>Dennis Ritchie</strong> at Bell Labs between 1969 and 1973. It was developed alongside the <strong>UNIX</strong> operating system, and much of UNIX was eventually rewritten in C itself.</p>
        <p>C gave programmers low-level control over memory and hardware while still offering structured, readable syntax — a combination that made it hugely influential.</p>
        <p>C remains important today because it underpins operating systems, embedded systems, device drivers and performance-critical software. Learning C builds a strong foundation for understanding how computers actually work.</p>
      `
    },
    {
      id: "why-c", h: "Why Learn C?",
      body: `
        <ul>
          <li>Teaches you how memory, pointers and hardware actually work.</li>
          <li>Foundation for learning C++, Java, and many other languages.</li>
          <li>Used heavily in operating systems and embedded systems.</li>
          <li>Extremely fast and efficient — close to hardware.</li>
          <li>Strengthens problem-solving and logical thinking skills.</li>
        </ul>
      `
    },
    {
      id: "features", h: "Features of C",
      body: `
        <ul>
          <li><strong>Procedural</strong> — code executes in a defined sequence of functions.</li>
          <li><strong>Fast and efficient</strong> — compiles to highly optimized machine code.</li>
          <li><strong>Portable</strong> — C programs can run on many different hardware platforms.</li>
          <li><strong>Low-level access</strong> — direct memory manipulation using pointers.</li>
          <li><strong>Rich library support</strong> — a comprehensive standard library.</li>
          <li><strong>Structured</strong> — organizes code into functions and blocks.</li>
        </ul>
      `
    },
    {
      id: "installation", h: "C Installation",
      body: `
        <p>To compile and run C programs, install a C compiler:</p>
        <ol>
          <li><strong>Windows:</strong> Install MinGW or use WSL with GCC.</li>
          <li><strong>macOS:</strong> Install Xcode Command Line Tools, which includes GCC/Clang.</li>
          <li><strong>Linux:</strong> Install GCC using your package manager, e.g. <code>sudo apt install gcc</code>.</li>
          <li>Verify installation with <code>gcc --version</code> in the terminal.</li>
        </ol>
      `
    },
    {
      id: "first-program", h: "First C Program",
      body: `
        <p>Every C program starts execution from the <code>main()</code> function.</p>
        ${codeBlock("c", "hello.c",
`<span class="c-kw">#include</span> <span class="c-str">&lt;stdio.h&gt;</span>

<span class="c-kw">int</span> <span class="c-fn">main</span>() {
    <span class="c-fn">printf</span>(<span class="c-str">"Hello World"</span>);
    <span class="c-kw">return</span> <span class="c-kw">0</span>;
}`)}
      `
    },
    {
      id: "syntax", h: "C Syntax",
      body: `
        <p>C programs are structured with header includes, a <code>main()</code> function, statements ending in semicolons, and curly braces marking blocks of code.</p>
      `
    },
    {
      id: "variables", h: "Variables",
      body: `
        <p>Variables in C must be declared with a specific data type before use.</p>
        ${codeBlock("c", "variables.c",
`<span class="c-kw">int</span> age = <span class="c-kw">21</span>;
<span class="c-kw">float</span> price = <span class="c-kw">99.5</span>;
<span class="c-kw">char</span> grade = <span class="c-str">'A'</span>;`)}
      `
    },
    {
      id: "data-types", h: "Data Types",
      body: `
        <div class="chip-row">
          <span class="chip">int</span><span class="chip">float</span>
          <span class="chip">double</span><span class="chip">char</span>
        </div>
        <table class="ref-table">
          <tr><th>Type</th><th>Description</th><th>Example</th></tr>
          <tr><td>int</td><td>Whole numbers</td><td>10</td></tr>
          <tr><td>float</td><td>Decimal numbers</td><td>10.5</td></tr>
          <tr><td>double</td><td>Larger decimal precision</td><td>10.55555</td></tr>
          <tr><td>char</td><td>Single character</td><td>'A'</td></tr>
        </table>
      `
    },
    {
      id: "constants", h: "Constants",
      body: `
        <p>Constants hold fixed values that cannot change during program execution, defined using <code>const</code> or <code>#define</code>.</p>
        ${codeBlock("c", "constants.c",
`<span class="c-kw">#define</span> PI <span class="c-kw">3.14</span>
<span class="c-kw">const</span> <span class="c-kw">int</span> MAX_USERS = <span class="c-kw">100</span>;`)}
      `
    },
    {
      id: "operators", h: "Operators",
      body: `
        <p>C provides arithmetic (+ - * / %), relational (== != &gt; &lt;), logical (&& || !), assignment (= += -=) and bitwise (& | ^ ~ << >>) operators.</p>
      `
    },
    {
      id: "if-else", h: "If / Else",
      body: `
        ${codeBlock("c", "if-else.c",
`<span class="c-kw">int</span> age = <span class="c-kw">20</span>;

<span class="c-kw">if</span> (age &gt;= <span class="c-kw">18</span>) {
    <span class="c-fn">printf</span>(<span class="c-str">"Adult"</span>);
} <span class="c-kw">else</span> {
    <span class="c-fn">printf</span>(<span class="c-str">"Minor"</span>);
}`)}
      `
    },
    {
      id: "switch", h: "Switch",
      body: `
        ${codeBlock("c", "switch.c",
`<span class="c-kw">int</span> day = <span class="c-kw">2</span>;

<span class="c-kw">switch</span>(day) {
    <span class="c-kw">case</span> <span class="c-kw">1</span>: <span class="c-fn">printf</span>(<span class="c-str">"Monday"</span>); <span class="c-kw">break</span>;
    <span class="c-kw">case</span> <span class="c-kw">2</span>: <span class="c-fn">printf</span>(<span class="c-str">"Tuesday"</span>); <span class="c-kw">break</span>;
    <span class="c-kw">default</span>: <span class="c-fn">printf</span>(<span class="c-str">"Other day"</span>);
}`)}
      `
    },
    {
      id: "for-loop", h: "For Loop",
      body: `
        ${codeBlock("c", "for.c",
`<span class="c-kw">for</span> (<span class="c-kw">int</span> i = <span class="c-kw">0</span>; i &lt; <span class="c-kw">5</span>; i++) {
    <span class="c-fn">printf</span>(<span class="c-str">"%d\\n"</span>, i);
}`)}
      `
    },
    {
      id: "while-loop", h: "While Loop",
      body: `
        ${codeBlock("c", "while.c",
`<span class="c-kw">int</span> i = <span class="c-kw">0</span>;
<span class="c-kw">while</span> (i &lt; <span class="c-kw">5</span>) {
    <span class="c-fn">printf</span>(<span class="c-str">"%d\\n"</span>, i);
    i++;
}`)}
      `
    },
    {
      id: "do-while", h: "Do While Loop",
      body: `
        ${codeBlock("c", "do-while.c",
`<span class="c-kw">int</span> i = <span class="c-kw">0</span>;
<span class="c-kw">do</span> {
    <span class="c-fn">printf</span>(<span class="c-str">"%d\\n"</span>, i);
    i++;
} <span class="c-kw">while</span> (i &lt; <span class="c-kw">5</span>);`)}
      `
    },
    {
      id: "functions", h: "Functions",
      body: `
        ${codeBlock("c", "functions.c",
`<span class="c-kw">int</span> <span class="c-fn">add</span>(<span class="c-kw">int</span> a, <span class="c-kw">int</span> b) {
    <span class="c-kw">return</span> a + b;
}

<span class="c-kw">int</span> <span class="c-fn">main</span>() {
    <span class="c-fn">printf</span>(<span class="c-str">"%d"</span>, <span class="c-fn">add</span>(<span class="c-kw">3</span>, <span class="c-kw">4</span>));
    <span class="c-kw">return</span> <span class="c-kw">0</span>;
}`)}
      `
    },
    {
      id: "arrays", h: "Arrays",
      body: `
        ${codeBlock("c", "arrays.c",
`<span class="c-kw">int</span> numbers[<span class="c-kw">5</span>] = {<span class="c-kw">1</span>, <span class="c-kw">2</span>, <span class="c-kw">3</span>, <span class="c-kw">4</span>, <span class="c-kw">5</span>};
<span class="c-fn">printf</span>(<span class="c-str">"%d"</span>, numbers[<span class="c-kw">0</span>]);`)}
      `
    },
    {
      id: "strings", h: "Strings",
      body: `
        <p>In C, strings are arrays of characters terminated by a null character (<code>\\0</code>).</p>
        ${codeBlock("c", "strings.c",
`<span class="c-kw">char</span> name[] = <span class="c-str">"Coding IndiaTrend"</span>;
<span class="c-fn">printf</span>(<span class="c-str">"%s"</span>, name);`)}
      `
    },
    {
      id: "pointers", h: "Pointers",
      body: `
        <p>A pointer stores the memory address of another variable — one of C's most powerful features.</p>
        ${codeBlock("c", "pointers.c",
`<span class="c-kw">int</span> x = <span class="c-kw">10</span>;
<span class="c-kw">int</span> *ptr = &amp;x;

<span class="c-fn">printf</span>(<span class="c-str">"%d"</span>, *ptr); <span class="c-comment">// 10</span>`)}
      `
    },
    {
      id: "structures", h: "Structures",
      body: `
        ${codeBlock("c", "struct.c",
`<span class="c-kw">struct</span> Student {
    <span class="c-kw">char</span> name[<span class="c-kw">50</span>];
    <span class="c-kw">int</span> age;
};

<span class="c-kw">struct</span> Student s1 = {<span class="c-str">"Aman"</span>, <span class="c-kw">20</span>};`)}
      `
    },
    {
      id: "unions", h: "Unions",
      body: `
        <p>A union is similar to a structure, but all members share the same memory location, so only one member holds a value at a time.</p>
        ${codeBlock("c", "union.c",
`<span class="c-kw">union</span> Data {
    <span class="c-kw">int</span> i;
    <span class="c-kw">float</span> f;
};`)}
      `
    },
    {
      id: "enums", h: "Enumerations",
      body: `
        ${codeBlock("c", "enum.c",
`<span class="c-kw">enum</span> Day {MON, TUE, WED, THU, FRI};
<span class="c-kw">enum</span> Day today = WED;`)}
      `
    },
    {
      id: "dynamic-memory", h: "Dynamic Memory",
      body: `
        <p>C provides manual memory management functions:</p>
        <div class="chip-row">
          <span class="chip">malloc</span><span class="chip">calloc</span>
          <span class="chip">realloc</span><span class="chip">free</span>
        </div>
        ${codeBlock("c", "memory.c",
`<span class="c-kw">int</span> *arr = (<span class="c-kw">int</span>*) <span class="c-fn">malloc</span>(<span class="c-kw">5</span> * <span class="c-kw">sizeof</span>(<span class="c-kw">int</span>));
<span class="c-fn">free</span>(arr);`)}
      `
    },
    {
      id: "file-handling", h: "File Handling",
      body: `
        ${codeBlock("c", "files.c",
`FILE *fp = <span class="c-fn">fopen</span>(<span class="c-str">"data.txt"</span>, <span class="c-str">"w"</span>);
<span class="c-fn">fprintf</span>(fp, <span class="c-str">"Hello File"</span>);
<span class="c-fn">fclose</span>(fp);`)}
      `
    },
    {
      id: "projects", h: "C Projects",
      body: `
        <div class="project-grid">
          <div class="project-item"><h4>Simple Calculator</h4><p>Practice functions and switch statements.</p></div>
          <div class="project-item"><h4>Student Record System</h4><p>Use structures and arrays.</p></div>
          <div class="project-item"><h4>Number Pattern Printer</h4><p>Practice nested loops.</p></div>
          <div class="project-item"><h4>Library Management (Console)</h4><p>Combine structs and file handling.</p></div>
        </div>
      `
    },
    {
      id: "career", h: "Career Uses",
      body: `<p>C skills are valuable for embedded systems engineering, operating system development, firmware programming, systems programming and competitive programming — plus a strong foundation for almost every other language.</p>`
    },
    {
      id: "faq", h: "C FAQ",
      body: `
        ${faqBlock([
          ["Is C still useful in 2026?", "Yes. C remains essential for operating systems, embedded devices and performance-critical software."],
          ["Is C hard to learn?", "C has a steeper learning curve than Python due to manual memory management, but it's very learnable with practice."],
          ["Should I learn C before C++?", "It's not required, but learning C first helps you understand C++ concepts more deeply."],
          ["What are pointers used for?", "Pointers let you directly work with memory addresses, enabling efficient data structures and memory control."],
          ["Is C used in operating systems?", "Yes, both UNIX and Linux kernels are written primarily in C."],
          ["Can I build real-world apps with just C?", "Yes, though it requires more manual work than higher-level languages."],
          ["What compiler should I use for C?", "GCC (GNU Compiler Collection) is the most widely used and recommended for beginners."],
          ["Is C useful for competitive programming?", "Yes, its speed and low overhead make it a strong choice for competitive programming."]
        ])}
      `
    }
  ],
  related: [
    { label: "Continue with C++", url: "/cpp" },
    { label: "Learn Python", url: "/python" }
  ]
};
/* ============================================================
   C++ PAGE CONTENT
   ============================================================ */
const cppContent = {
  key: "cpp",
  title: "C++ Programming",
  seoTitle: "C++ Programming Tutorial – Learn C++ | Coding IndiaTrend",
  seoDesc: "Learn C++ programming with simple tutorials covering syntax, variables, data types, loops, functions, classes, objects, inheritance, polymorphism and STL.",
  lede: "Learn modern C++ — object-oriented programming, memory control and the STL, explained clearly for beginners.",
  images: [
    { alt: "C++ programming code in an IDE", q: "c++ programming code" },
    { alt: "C++ development environment on a screen", q: "c++ development environment" },
    { alt: "C++ programming concept with object-oriented design", q: "c++ programming concept" }
  ],
  toc: [
    "About C++","Why Learn C++?","Features","Installation","First C++ Program","Variables","Data Types",
    "Operators","Conditions","Loops","Functions","Arrays","Strings","References","Pointers","Classes",
    "Objects","Constructors","Destructors","Encapsulation","Inheritance","Polymorphism","Abstraction",
    "Templates","STL","C++ Projects","Career Uses","FAQ"
  ],
  sections: [
    {
      id: "about-cpp", h: "About C++",
      body: `
        <p>C++ is a general-purpose programming language created by <strong>Bjarne Stroustrup</strong> starting in 1979 as an extension of the C language, originally called "C with Classes". It was designed to add object-oriented programming features while keeping the performance and low-level control of C.</p>
        <p>C++ is essentially a superset of C — most valid C code can be compiled as C++. But C++ adds classes, objects, templates, exception handling and the Standard Template Library (STL), making it far more powerful for large-scale software.</p>
        <p>C++ is used in game engines, operating systems, high-frequency trading systems, browsers and performance-critical applications where speed and control matter.</p>
      `
    },
    {
      id: "why-cpp", h: "Why Learn C++?",
      body: `
        <ul>
          <li>Combines low-level control with high-level object-oriented features.</li>
          <li>Powers game engines like Unreal Engine.</li>
          <li>Used in system software, browsers and embedded applications.</li>
          <li>Strong foundation for understanding object-oriented design.</li>
          <li>Excellent for competitive programming due to speed and the STL.</li>
        </ul>
      `
    },
    {
      id: "features", h: "Features",
      body: `
        <ul>
          <li><strong>Object-oriented</strong> — classes, objects, inheritance and polymorphism.</li>
          <li><strong>Fast execution</strong> — compiled directly to machine code.</li>
          <li><strong>Rich standard library</strong> — the STL provides ready-made data structures and algorithms.</li>
          <li><strong>Memory control</strong> — manual and smart pointer memory management.</li>
          <li><strong>Multi-paradigm</strong> — supports procedural, object-oriented and generic programming.</li>
        </ul>
      `
    },
    {
      id: "installation", h: "Installation",
      body: `
        <ol>
          <li><strong>Windows:</strong> Install MinGW-w64 or use WSL with g++.</li>
          <li><strong>macOS:</strong> Install Xcode Command Line Tools (includes Clang++).</li>
          <li><strong>Linux:</strong> Install g++ via <code>sudo apt install g++</code>.</li>
          <li>Verify with <code>g++ --version</code>.</li>
        </ol>
      `
    },
    {
      id: "first-program", h: "First C++ Program",
      body: `
        ${codeBlock("cpp", "hello.cpp",
`<span class="c-kw">#include</span> <span class="c-str">&lt;iostream&gt;</span>

<span class="c-kw">using namespace</span> std;

<span class="c-kw">int</span> <span class="c-fn">main</span>() {
    cout &lt;&lt; <span class="c-str">"Hello World"</span>;
    <span class="c-kw">return</span> <span class="c-kw">0</span>;
}`)}
      `
    },
    {
      id: "variables", h: "Variables",
      body: `
        ${codeBlock("cpp", "variables.cpp",
`<span class="c-kw">int</span> age = <span class="c-kw">22</span>;
<span class="c-kw">double</span> price = <span class="c-kw">49.99</span>;
<span class="c-kw">char</span> grade = <span class="c-str">'A'</span>;
<span class="c-kw">bool</span> passed = <span class="c-kw">true</span>;`)}
      `
    },
    {
      id: "data-types", h: "Data Types",
      body: `
        <table class="ref-table">
          <tr><th>Type</th><th>Description</th></tr>
          <tr><td>int</td><td>Whole numbers</td></tr>
          <tr><td>float / double</td><td>Decimal numbers</td></tr>
          <tr><td>char</td><td>Single character</td></tr>
          <tr><td>bool</td><td>true / false</td></tr>
          <tr><td>string</td><td>Text (via &lt;string&gt;)</td></tr>
        </table>
      `
    },
    {
      id: "operators", h: "Operators",
      body: `<p>C++ supports the same operator categories as C — arithmetic, relational, logical, assignment and bitwise — plus operator overloading for custom types.</p>`
    },
    {
      id: "conditions", h: "Conditions",
      body: `
        ${codeBlock("cpp", "conditions.cpp",
`<span class="c-kw">int</span> marks = <span class="c-kw">85</span>;

<span class="c-kw">if</span> (marks &gt;= <span class="c-kw">90</span>) {
    cout &lt;&lt; <span class="c-str">"Grade A"</span>;
} <span class="c-kw">else if</span> (marks &gt;= <span class="c-kw">75</span>) {
    cout &lt;&lt; <span class="c-str">"Grade B"</span>;
} <span class="c-kw">else</span> {
    cout &lt;&lt; <span class="c-str">"Grade C"</span>;
}`)}
      `
    },
    {
      id: "loops", h: "Loops",
      body: `
        ${codeBlock("cpp", "loops.cpp",
`<span class="c-kw">for</span> (<span class="c-kw">int</span> i = <span class="c-kw">0</span>; i &lt; <span class="c-kw">5</span>; i++) {
    cout &lt;&lt; i &lt;&lt; <span class="c-str">"\\n"</span>;
}`)}
      `
    },
    {
      id: "functions", h: "Functions",
      body: `
        ${codeBlock("cpp", "functions.cpp",
`<span class="c-kw">int</span> <span class="c-fn">add</span>(<span class="c-kw">int</span> a, <span class="c-kw">int</span> b) {
    <span class="c-kw">return</span> a + b;
}`)}
      `
    },
    {
      id: "arrays", h: "Arrays",
      body: `
        ${codeBlock("cpp", "arrays.cpp",
`<span class="c-kw">int</span> nums[<span class="c-kw">5</span>] = {<span class="c-kw">1</span>, <span class="c-kw">2</span>, <span class="c-kw">3</span>, <span class="c-kw">4</span>, <span class="c-kw">5</span>};`)}
      `
    },
    {
      id: "strings", h: "Strings",
      body: `
        ${codeBlock("cpp", "strings.cpp",
`<span class="c-kw">#include</span> <span class="c-str">&lt;string&gt;</span>

string name = <span class="c-str">"Coding IndiaTrend"</span>;
cout &lt;&lt; name;`)}
      `
    },
    {
      id: "references", h: "References",
      body: `
        <p>A reference is an alias for an existing variable, declared with <code>&amp;</code>.</p>
        ${codeBlock("cpp", "references.cpp",
`<span class="c-kw">int</span> x = <span class="c-kw">10</span>;
<span class="c-kw">int</span> &amp;ref = x;
ref = <span class="c-kw">20</span>; <span class="c-comment">// x is now 20</span>`)}
      `
    },
    {
      id: "pointers", h: "Pointers",
      body: `
        ${codeBlock("cpp", "pointers.cpp",
`<span class="c-kw">int</span> x = <span class="c-kw">10</span>;
<span class="c-kw">int</span> *ptr = &amp;x;
cout &lt;&lt; *ptr;`)}
      `
    },
    {
      id: "classes", h: "Classes",
      body: `
        ${codeBlock("cpp", "classes.cpp",
`<span class="c-kw">class</span> Student {
<span class="c-kw">public</span>:
    string name;
    <span class="c-kw">void</span> <span class="c-fn">greet</span>() {
        cout &lt;&lt; <span class="c-str">"Hi, "</span> &lt;&lt; name;
    }
};`)}
      `
    },
    {
      id: "objects", h: "Objects",
      body: `
        ${codeBlock("cpp", "objects.cpp",
`Student s;
s.name = <span class="c-str">"Diya"</span>;
s.<span class="c-fn">greet</span>();`)}
      `
    },
    {
      id: "constructors", h: "Constructors",
      body: `
        <p>A constructor is a special function that runs automatically when an object is created.</p>
        ${codeBlock("cpp", "constructor.cpp",
`<span class="c-kw">class</span> Student {
<span class="c-kw">public</span>:
    string name;
    <span class="c-fn">Student</span>(string n) {
        name = n;
    }
};`)}
      `
    },
    {
      id: "destructors", h: "Destructors",
      body: `
        <p>A destructor runs automatically when an object is destroyed, used to release resources.</p>
        ${codeBlock("cpp", "destructor.cpp",
`<span class="c-kw">class</span> Student {
<span class="c-kw">public</span>:
    <span class="c-fn">~Student</span>() {
        cout &lt;&lt; <span class="c-str">"Object destroyed"</span>;
    }
};`)}
      `
    },
    {
      id: "encapsulation", h: "Encapsulation",
      body: `<p>Encapsulation bundles data and methods together while restricting direct access using access specifiers like <code>private</code> and <code>public</code>.</p>`
    },
    {
      id: "inheritance", h: "Inheritance",
      body: `
        ${codeBlock("cpp", "inheritance.cpp",
`<span class="c-kw">class</span> Animal {
<span class="c-kw">public</span>:
    <span class="c-kw">void</span> <span class="c-fn">speak</span>() { cout &lt;&lt; <span class="c-str">"Animal"</span>; }
};

<span class="c-kw">class</span> Dog : <span class="c-kw">public</span> Animal {
<span class="c-kw">public</span>:
    <span class="c-kw">void</span> <span class="c-fn">bark</span>() { cout &lt;&lt; <span class="c-str">"Dog barks"</span>; }
};`)}
      `
    },
    {
      id: "polymorphism", h: "Polymorphism",
      body: `<p>Polymorphism lets objects of different classes be treated through a common interface, typically implemented using virtual functions in C++.</p>`
    },
    {
      id: "abstraction", h: "Abstraction",
      body: `<p>Abstraction hides implementation complexity and exposes only essential features, often achieved using abstract classes and interfaces.</p>`
    },
    {
      id: "templates", h: "Templates",
      body: `
        <p>Templates allow writing generic functions and classes that work with any data type.</p>
        ${codeBlock("cpp", "templates.cpp",
`<span class="c-kw">template</span> &lt;<span class="c-kw">typename</span> T&gt;
T <span class="c-fn">getMax</span>(T a, T b) {
    <span class="c-kw">return</span> (a &gt; b) ? a : b;
}`)}
      `
    },
    {
      id: "stl", h: "STL",
      body: `
        <p>The Standard Template Library provides ready-made data structures and algorithms:</p>
        <div class="chip-row">
          <span class="chip">vector</span><span class="chip">map</span><span class="chip">set</span>
          <span class="chip">stack</span><span class="chip">queue</span>
        </div>
        ${codeBlock("cpp", "stl.cpp",
`<span class="c-kw">#include</span> <span class="c-str">&lt;vector&gt;</span>

vector&lt;<span class="c-kw">int</span>&gt; nums = {<span class="c-kw">1</span>, <span class="c-kw">2</span>, <span class="c-kw">3</span>};
nums.<span class="c-fn">push_back</span>(<span class="c-kw">4</span>);`)}
      `
    },
    {
      id: "projects", h: "C++ Projects",
      body: `
        <div class="project-grid">
          <div class="project-item"><h4>Bank Management System</h4><p>Practice classes and file handling.</p></div>
          <div class="project-item"><h4>Tic-Tac-Toe Game</h4><p>Practice OOP and 2D arrays.</p></div>
          <div class="project-item"><h4>Inventory System</h4><p>Use STL containers like vector and map.</p></div>
          <div class="project-item"><h4>Student Grade Calculator</h4><p>Combine classes and control flow.</p></div>
        </div>
      `
    },
    {
      id: "career", h: "Career Uses",
      body: `<p>C++ skills are valuable for game development, systems programming, high-performance computing, embedded systems and competitive programming roles.</p>`
    },
    {
      id: "faq", h: "C++ FAQ",
      body: `
        ${faqBlock([
          ["Is C++ difficult to learn?", "C++ has more concepts than C due to object-oriented features, but it becomes manageable with structured practice."],
          ["Is C++ still relevant in 2026?", "Yes, C++ remains critical for game engines, performance-critical systems and competitive programming."],
          ["What is the difference between C and C++?", "C++ extends C with object-oriented programming, templates, and the STL, while remaining largely compatible with C syntax."],
          ["Do I need to learn C before C++?", "Not strictly, but understanding C fundamentals makes learning C++ easier."],
          ["Is C++ used in game development?", "Yes, major game engines like Unreal Engine are built with C++."],
          ["What is the STL?", "The Standard Template Library provides pre-built data structures and algorithms like vectors, maps and sorting functions."],
          ["Is C++ good for competitive programming?", "Yes, its speed and the STL make it one of the most popular languages for competitive programming."],
          ["Can I build software applications with C++?", "Yes, C++ is used to build desktop applications, games, system software and more."]
        ])}
      `
    }
  ],
  related: [
    { label: "Learn C", url: "/c" },
    { label: "Learn Python", url: "/python" }
  ]
};
/* ============================================================
   CODING INDIATREND — APP ENGINE
   Handles routing, rendering, SEO, search, theme, TOC, code-copy.
   ============================================================ */

const SITE_URL = "https://coding.indiatrend.in";

const languages = {
  python: pythonContent,
  c: cContent,
  cpp: cppContent
};

/* ---------- Helpers used by content modules ---------- */
function codeBlock(lang, filename, codeHtml) {
  return `
    <div class="code-block">
      <div class="code-block-head">
        <span>${filename}</span>
        <button class="copy-btn" data-code-copy>Copy</button>
      </div>
      <pre><code class="raw-code" data-raw="${encodeURIComponent(stripTags(codeHtml))}">${codeHtml}</code></pre>
    </div>`;
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}

function faqBlock(pairs) {
  return `<div class="faq-list">` + pairs.map(([q, a], i) => `
    <div class="faq-item" data-faq>
      <button class="faq-q" aria-expanded="false">
        <span>${q}</span><span class="icon">+</span>
      </button>
      <div class="faq-a"><p>${a}</p></div>
    </div>`).join("") + `</div>`;
}

/* ---------- Image helper (Unsplash source — royalty-free) ---------- */
function imgTag(query, alt) {
  const src = `https://source.unsplash.com/600x400/?${encodeURIComponent(query)}`;
  return `<figure><img src="${src}" alt="${alt}" loading="lazy" width="600" height="400"></figure>`;
}

/* ============================================================
   ROUTING
   ============================================================ */
function getCurrentRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/" || path === "") return "home";
  if (path === "/python") return "python";
  if (path === "/c") return "c";
  if (path === "/cpp") return "cpp";
  return "404";
}

function navigateTo(path) {
  window.history.pushState({}, "", path);
  render();
}

/* Intercept internal link clicks for SPA-style navigation */
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    const url = new URL(link.href);
    navigateTo(url.pathname);
    closeMobileMenu();
  }
});
window.addEventListener("popstate", render);

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */
function render() {
  const route = getCurrentRoute();
  const app = document.getElementById("app");

  if (route === "home") {
    app.innerHTML = renderHome();
    updateSEO({
      title: "Coding IndiaTrend – Learn Python, C and C++ Programming",
      desc: "Learn Python, C and C++ programming from scratch with simple explanations, real examples and a beginner-friendly roadmap. Free programming tutorials by Coding IndiaTrend.",
      path: "/"
    });
    injectStructuredData(homeStructuredData());
    setupHomeInteractions();
  } else if (languages[route]) {
    const data = languages[route];
    app.innerHTML = renderLanguagePage(data);
    updateSEO({ title: data.seoTitle, desc: data.seoDesc, path: "/" + route });
    injectStructuredData(languageStructuredData(data, route));
    setupLanguagePageInteractions(data);
  } else {
    app.innerHTML = render404();
    updateSEO({
      title: "Page Not Found | Coding IndiaTrend",
      desc: "The page you're looking for doesn't exist.",
      path: window.location.pathname,
      noindex: true
    });
  }

  setActiveNav(route);
  setupCodeCopy();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function setActiveNav(route) {
  document.querySelectorAll(".nav-links a, .mobile-drawer a").forEach(a => {
    const href = a.getAttribute("href");
    const match = (route === "home" && href === "/") || href === "/" + route;
    a.classList.toggle("active", match);
  });
}

/* ---------- HOME PAGE ---------- */
function renderHome() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <h1>Learn Programming.<br>Build Your Future.</h1>
          <p class="hero-sub">Learn Python, C and C++ with simple explanations, examples and practical programming concepts — built for beginners, written for clarity.</p>
          <div class="hero-actions">
            <a href="/python" data-link class="btn btn-primary">Start Learning</a>
            <a href="#languages" class="btn btn-secondary">Explore Languages</a>
          </div>
        </div>
        <div class="terminal">
          <div class="terminal-bar">
            <span class="terminal-dot"></span><span class="terminal-dot"></span><span class="terminal-dot"></span>
          </div>
          <div class="terminal-body">
<span class="c-comment"># three languages, one journey</span>
<span class="c-kw">def</span> <span class="c-fn">learn</span>(language):
    <span class="c-kw">if</span> language <span class="c-kw">in</span> [<span class="c-str">"Python"</span>, <span class="c-str">"C"</span>, <span class="c-str">"C++"</span>]:
        <span class="c-kw">return</span> <span class="c-str">"Start building today"</span>

<span class="c-fn">print</span>(<span class="c-fn">learn</span>(<span class="c-str">"Python"</span>))
</div>
        </div>
      </div>
    </section>

    <section class="section" id="languages">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Choose your path</span>
          <h2>Programming Languages</h2>
          <p>Three languages, three ways of thinking about code. Start wherever fits your goals.</p>
        </div>
        <div class="lang-grid">
          <article class="lang-card python">
            <h3>Python Programming</h3>
            <p>Learn Python from basics to advanced concepts.</p>
            <a href="/python" data-link class="btn">Learn Python →</a>
          </article>
          <article class="lang-card c">
            <h3>C Programming</h3>
            <p>Learn C programming, syntax, logic and fundamentals.</p>
            <a href="/c" data-link class="btn">Learn C →</a>
          </article>
          <article class="lang-card cpp">
            <h3>C++ Programming</h3>
            <p>Learn modern C++ programming and object-oriented concepts.</p>
            <a href="/cpp" data-link class="btn">Learn C++ →</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">The bigger picture</span>
          <h2>Why Learn Programming?</h2>
        </div>
        <div class="reason-grid">
          ${[
            ["Problem Solving", "Programming trains you to break big problems into small, logical steps."],
            ["Software Development", "Build the apps, tools and systems that power everyday life."],
            ["Web Development", "Create websites and web applications used by millions."],
            ["AI & Machine Learning", "Understand and build the intelligent systems shaping the future."],
            ["Game Development", "Turn your ideas into interactive, playable experiences."],
            ["Automation", "Automate repetitive tasks and save hours of manual work."],
            ["Career Opportunities", "Programming is one of the most in-demand skills globally."]
          ].map(([h, p], i) => `
            <div class="reason-item">
              <span class="reason-num">${String(i+1).padStart(2,'0')}</span>
              <div><h4>${h}</h4><p>${p}</p></div>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Where to start</span>
          <h2>Learning Roadmap</h2>
          <p>A suggested order to build skills step by step.</p>
        </div>
        <div class="roadmap">
          ${["Programming Basics","C Fundamentals","C++","Python","Projects","Career"].map((step, i, arr) => `
            <div class="roadmap-step ${i === 0 ? "active" : ""}">
              <span class="dot">${i+1}</span><span class="label">${step}</span>
            </div>
            ${i < arr.length - 1 ? '<div class="roadmap-connector"></div>' : ''}
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">No experience needed</span>
          <h2>Beginner Friendly</h2>
          <p>Coding IndiaTrend is designed from the ground up for students and complete beginners. Every concept is explained in plain language first, followed by real, working code examples — no assumed knowledge, no jargon left unexplained. Whether you're a student preparing for exams or someone starting a new career path, the tutorials are structured to build your understanding one step at a time.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Common questions</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        ${faqBlock([
          ["Which programming language should beginners learn?", "Python is often recommended first due to its simple syntax, but C builds a strong foundation in how computers work. Either is a good starting point depending on your goals."],
          ["Is Python easy to learn?", "Yes, Python's clean and readable syntax makes it one of the easiest languages for beginners to pick up."],
          ["Is C useful for learning programming?", "Yes, C teaches core programming concepts like memory management that carry over into almost every other language."],
          ["Is C++ difficult?", "C++ has more features than C due to object-oriented programming, but it's very learnable with structured practice."],
          ["Can I learn programming for free?", "Yes, all tutorials on Coding IndiaTrend are completely free, and official compilers and tools like Python, GCC and G++ are free to use."],
          ["Which language is useful for software development?", "All three are useful — Python for scripting and AI, C for systems programming, and C++ for performance-critical applications and game development."]
        ])}
      </div>
    </section>
  `;
}

/* ---------- LANGUAGE PAGE ---------- */
function renderLanguagePage(data) {
  const imagesHtml = data.images.map(img => imgTag(img.q, img.alt)).join("");
  const tocHtml = data.sections.map(s => `<li><a href="#${s.id}" data-toc-link>${s.h}</a></li>`).join("");
  const sectionsHtml = data.sections.map((s, i) => `
    <section id="${s.id}">
      <h2>${s.h}</h2>
      ${s.body}
      ${i === 2 ? `<div class="img-row">${imagesHtml}</div>` : ""}
    </section>
  `).join("");

  return `
    <div class="page-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="/" data-link>Home</a><span class="sep">›</span><span>${data.title}</span>
        </div>
        <h1>${data.title}</h1>
        <p class="page-lede">${data.lede}</p>
      </div>
    </div>

    <div class="doc-layout">
      <aside class="toc">
        <span class="toc-label">On this page</span>
        <ol>${tocHtml}</ol>
      </aside>
      <article class="doc-content">
        ${sectionsHtml}
        <section>
          <h2>Continue Learning</h2>
          <div class="internal-links">
            ${data.related.map(r => `<a href="${r.url}" data-link>${r.label}</a>`).join("")}
          </div>
        </section>
      </article>
    </div>
  `;
}

/* ---------- 404 PAGE ---------- */
function render404() {
  return `
    <div class="container page-404">
      <div class="code">404 / NOT FOUND</div>
      <h1>This page doesn't exist.</h1>
      <p class="hero-sub">The page you're looking for may have been moved or removed. Try one of the language tutorials instead.</p>
      <div class="hero-actions">
        <a href="/" data-link class="btn btn-primary">Back to Home</a>
        <a href="/python" data-link class="btn btn-secondary">Learn Python</a>
      </div>
    </div>
  `;
}

/* ============================================================
   SEO
   ============================================================ */
function updateSEO({ title, desc, path, noindex }) {
  document.title = title;
  setMeta('meta[name="description"]', desc);
  setMeta('meta[name="robots"]', noindex ? "noindex, follow" : "index, follow");
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', desc);
  setMeta('meta[property="og:url"]', SITE_URL + path);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", SITE_URL + path);
}

function setMeta(selector, content) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

/* ---------- Structured Data (JSON-LD) ---------- */
function injectStructuredData(obj) {
  const el = document.getElementById("structured-data");
  if (el) el.textContent = JSON.stringify(obj);
}

function homeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Coding IndiaTrend",
        "url": SITE_URL + "/",
        "description": "Learn Python, C and C++ programming with simple tutorials."
      },
      {
        "@type": "Organization",
        "name": "Coding IndiaTrend",
        "url": SITE_URL + "/"
      }
    ]
  };
}

function languageStructuredData(data, route) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": data.seoTitle,
        "description": data.seoDesc,
        "url": SITE_URL + "/" + route
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + "/" },
          { "@type": "ListItem", "position": 2, "name": data.title, "item": SITE_URL + "/" + route }
        ]
      }
    ]
  };
}

/* ============================================================
   PAGE-SPECIFIC INTERACTIONS
   ============================================================ */
function setupHomeInteractions() {
  setupFaqToggles();
}

function setupLanguagePageInteractions(data) {
  setupTocScrollSpy();
  setupFaqToggles();
}

function setupFaqToggles() {
  document.querySelectorAll("[data-faq]").forEach(item => {
    const btn = item.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      btn.querySelector(".icon").textContent = isOpen ? "+" : "–";
    });
  });
}

function setupTocScrollSpy() {
  const tocLinks = document.querySelectorAll("[data-toc-link]");
  if (!tocLinks.length) return;

  tocLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const sections = document.querySelectorAll(".doc-content section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove("active"));
        const activeLink = document.querySelector(`[data-toc-link][href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  sections.forEach(s => observer.observe(s));
}

/* ---------- Code copy ---------- */
function setupCodeCopy() {
  document.querySelectorAll("[data-code-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const codeEl = btn.closest(".code-block").querySelector(".raw-code");
      const raw = decodeURIComponent(codeEl.getAttribute("data-raw"));
      try {
        await navigator.clipboard.writeText(raw);
      } catch (err) {
        // fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = raw;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      const original = btn.textContent;
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 1800);
    });
  });
}

/* ============================================================
   NAVIGATION: mobile menu
   ============================================================ */
function closeMobileMenu() {
  const drawer = document.getElementById("mobile-drawer");
  const toggle = document.getElementById("menu-toggle");
  drawer.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  menuToggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ============================================================
   SEARCH
   ============================================================ */
function buildSearchIndex() {
  const index = [];
  Object.values(languages).forEach(lang => {
    index.push({ title: lang.title, lang: lang.title, url: "/" + lang.key });
    lang.sections.forEach(s => {
      index.push({ title: s.h, lang: lang.title, url: "/" + lang.key + "#" + s.id });
    });
  });
  return index;
}

function setupSearch() {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const index = buildSearchIndex();

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.remove("open"); results.innerHTML = ""; return; }

    const matches = index.filter(item => item.title.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) {
      results.innerHTML = `<div class="search-empty">No results for "${input.value}"</div>`;
    } else {
      results.innerHTML = matches.map(m => `
        <a href="${m.url}" data-link>
          <div>${m.title}</div>
          <div class="sr-lang">${m.lang}</div>
        </a>`).join("");
    }
    results.classList.add("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) {
      results.classList.remove("open");
    }
  });

  results.addEventListener("click", () => {
    input.value = "";
    results.classList.remove("open");
  });
}

/* ============================================================
   THEME (dark / light mode)
   ============================================================ */
function setupTheme() {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");

  applyTheme(initial);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("theme-toggle");
  toggle.textContent = theme === "dark" ? "☀" : "☾";
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupSearch();
  setupTheme();
  render();
});
