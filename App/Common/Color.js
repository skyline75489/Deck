'use strict';

var github_language_color = {
    "Mercury": "#abcdef", 
    "TypeScript": "#31859c", 
    "PureBasic": "#5a6986", 
    "Objective-C++": "#4886FC", 
    "Self": "#0579aa", 
    "edn": "#db5855", 
    "NewLisp": "#eedd66", 
    "Rebol": "#358a5b", 
    "Frege": "#00cafe", 
    "Dart": "#98BAD6", 
    "AspectJ": "#1957b0", 
    "Shell": "#89e051", 
    "Web Ontology Language": "#3994bc", 
    "xBase": "#3a4040", 
    "Eiffel": "#946d57", 
    "Nix": "#7070ff", 
    "SuperCollider": "#46390b", 
    "MTML": "#0095d9", 
    "Racket": "#ae17ff", 
    "Elixir": "#6e4a7e", 
    "SAS": "#1E90FF", 
    "Agda": "#467C91", 
    "D": "#fcd46d", 
    "Opal": "#f7ede0", 
    "Standard ML": "#dc566d", 
    "Objective-C": "#438eff", 
    "ColdFusion CFC": "#ed2cd6", 
    "Oz": "#fcaf3e", 
    "Mirah": "#c7a938", 
    "Objective-J": "#ff0c5a", 
    "Gosu": "#82937f", 
    "Ruby": "#701516", 
    "Component Pascal": "#b0ce4e", 
    "Arc": "#ca2afe", 
    "SystemVerilog": "#343761", 
    "APL": "#8a0707", 
    "Go": "#375eab", 
    "Visual Basic": "#945db7", 
    "PHP": "#4F5D95", 
    "Cirru": "#aaaaff", 
    "SQF": "#FFCB1F", 
    "Glyph": "#e4cc98", 
    "Java": "#b07219", 
    "Scala": "#7dd3b0", 
    "ColdFusion": "#ed2cd6", 
    "Perl": "#0298c3", 
    "Elm": "#60B5CC", 
    "Lua": "#fa1fa1", 
    "Verilog": "#848bf3", 
    "Factor": "#636746", 
    "Haxe": "#f7941e", 
    "Pure Data": "#91de79", 
    "Forth": "#341708", 
    "Red": "#ee0000", 
    "Hy": "#7891b1", 
    "Volt": "#0098db", 
    "LSL": "#3d9970", 
    "CoffeeScript": "#244776", 
    "HTML": "#e44b23", 
    "UnrealScript": "#a54c4d", 
    "Swift": "#ffac45", 
    "C": "#555", 
    "AutoHotkey": "#6594b9", 
    "Isabelle": "#fdcd00", 
    "Boo": "#d4bec1", 
    "AutoIt": "#36699B", 
    "Clojure": "#db5855", 
    "Rust": "#dea584", 
    "Prolog": "#74283c", 
    "SourcePawn": "#f69e1d", 
    "ANTLR": "#9DC3FF", 
    "Harbour": "#0e60e3", 
    "Tcl": "#e4cc98", 
    "BlitzMax": "#cd6400", 
    "PigLatin": "#fcd7de", 
    "Lasso": "#2584c3", 
    "ECL": "#8a1267", 
    "VHDL": "#543978", 
    "Arduino": "#bd79d1", 
    "Propeller Spin": "#2b446d", 
    "IDL": "#e3592c", 
    "ATS": "#1ac620", 
    "Ada": "#02f88c", 
    "Nu": "#c9df40", 
    "LFE": "#004200", 
    "RAML": "#77d9fb", 
    "Oxygene": "#5a63a3", 
    "ASP": "#6a40fd", 
    "Assembly": "#6E4C13", 
    "Gnuplot": "#f0a9f0", 
    "Turing": "#45f715", 
    "Vala": "#ee7d06", 
    "Processing": "#2779ab", 
    "FLUX": "#33CCFF", 
    "NetLogo": "#ff2b2b", 
    "C Sharp": "#178600", 
    "CSS": "#563d7c", 
    "LiveScript": "#499886", 
    "QML": "#44a51c", 
    "Pike": "#066ab2", 
    "LOLCODE": "#cc9900", 
    "ooc": "#b0b77e", 
    "Mask": "#f97732", 
    "EmberScript": "#f64e3e", 
    "TeX": "#3D6117", 
    "Nemerle": "#0d3c6e", 
    "KRL": "#f5c800", 
    "Unified Parallel C": "#755223", 
    "Golo": "#f6a51f", 
    "Perl6": "#0298c3", 
    "Fancy": "#7b9db4", 
    "OCaml": "#3be133", 
    "wisp": "#7582D1", 
    "Pascal": "#b0ce4e", 
    "F#": "#b845fc", 
    "Puppet": "#cc5555", 
    "ActionScript": "#e3491a", 
    "Ragel in Ruby Host": "#ff9c2e", 
    "Fantom": "#dbded5", 
    "Zephir": "#118f9e", 
    "Smalltalk": "#596706", 
    "DM": "#075ff1", 
    "Ioke": "#078193", 
    "PogoScript": "#d80074", 
    "Emacs Lisp": "#c065db", 
    "JavaScript": "#f1e05a", 
    "VimL": "#199c4b", 
    "Matlab": "#bb92ac", 
    "Slash": "#007eff", 
    "R": "#198ce7", 
    "Erlang": "#0faf8d", 
    "Pan": "#cc0000", 
    "LookML": "#652B81", 
    "Eagle": "#3994bc", 
    "Scheme": "#1e4aec", 
    "PAWN": "#dbb284", 
    "Python": "#3581ba", 
    "Max": "#ce279c", 
    "Common Lisp": "#3fb68b", 
    "Latte": "#A8FF97", 
    "XQuery": "#2700e2", 
    "Omgrofl": "#cabbff", 
    "Nimrod": "#37775b", 
    "Nit": "#0d8921", 
    "Chapel": "#8dc63f", 
    "Groovy": "#e69f56", 
    "Dylan": "#3ebc27", 
    "E": "#ccce35", 
    "Parrot": "#f3ca0a", 
    "Grammatical Framework": "#ff0000", 
    "Game Maker Language": "#8ad353", 
    "VCL": "#0298c3", 
    "Papyrus": "#6600cc", 
    "FORTRAN": "#4d41b1", 
    "Clean": "#3a81ad", 
    "Alloy": "#cc5c24", 
    "AGS Script": "#B9D9FF", 
    "Slim": "#ff8877", 
    "PureScript": "#bcdc53", 
    "Julia": "#a270ba", 
    "Haskell": "#29b544", 
    "Io": "#a9188d", 
    "Rouge": "#cc0088", 
    "cpp": "#f34b7d", 
    "Shen": "#120F14", 
    "Dogescript": "#cca760", 
    "nesC": "#ffce3b"
}

var github_link = '#4183C4';
var github_font_gray = '#666666';
var github_font_dark = '#4E575B';
var github_background_gray = '#F5F5F5';
var github_border_gray = '#E5E5E5';
var github_border_light_gray = '#F1F1F1';

module.exports = {
  github_language_color: github_language_color,
  github_link: github_link,
  github_font_gray: github_font_gray,
  github_font_dark: github_font_dark,
  github_background_gray: github_background_gray,
  github_border_gray: github_border_gray,
  github_border_light_gray: github_border_light_gray,
};
