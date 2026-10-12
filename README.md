# records

The Record Reconstruction practice program for mnovum.org records.

`practice.js` is the program only: it draws the monument index slides, runs the timer, scoring and progress.
It contains no course content. Each course page supplies its own content as `window.RR_COURSES` and loads:

    <div id="rrapp"></div>
    <script>window.RR_COURSES = [ … ];</script>
    <script src="https://mnovum.github.io/records/practice.js"></script>

Built by `tools/make_practice.py --program practice.js` in the record pipeline.
