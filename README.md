# Validation Suite for Cahn-Ingold-Prelog (CIP) descritpors

These files provide a collection for chemical structures for validating 
Cahn-Ingold-Prelog (CIP) descriptor labelling implementations.

Please Cite:

Robert M. Hanson, John W. Mayfield, Mikko J. Vainio, Andrey Yerin, 
Sophia Musacchio, and Dmitry Redkin. **Algorithmic analysis of 
Cahn-Ingold-Prelog rules of stereochemistry: Proposals for revised
rules anda guide for machine implementation** (Under Preparation)

## Cahn-Ingold-Preglog Labels

Each entry provides a set of recommended labels agreed upon by the authors of 
the above manuscript. Beyond the corner cases addressed in the manuscript these
labels can be considered to match the IUPAC recommendations. Please notify us
if you believe an assignment is incorrect.

Each label is described as an atom number and a CIP descriptor label:

	<atom_num><label>

A descriptor label is one of the following:
	
	R, S, r, s, M, P, m, p, Z, or E	

Atom numbers start at 1 and reference the explicit atom storage order of the
input format. For example in SMILES (R)-butan-2-ol would be labelled as:

	C[C@H](CC)O 2R or CC[C@H](C)O 3R

When a geometry that spans multiple atoms two and only two 'end' atoms are
labelled.

	C/C=C/C 2E 3E
	CC=[C@]=CC 2M 4M

## Geometry Key

Each entry lists the CIP geometries found.

|Symbol   | Description           | Example                  |
|---------|-----------------------|--------------------------|
|`TH`     | Tetrahedral           | (R)-butan-2-ol           |
|`CT`     | CisTrans Double Bond  | (Z)-but-2-ene            |
|`AT`     | Atropisomeric         | (M)-BiNAP                |
|`HE`     | Helicicene            | (M)-heptahelicene        |
|`TH<num>`| Extended Tetrahedral  | (M)-penta-2,3-diene      |
|`CT<num>`| Extended CisTrans     | (E)-hexa-2,3,4-triene    |

For Extended Tetrahedral and CisTrans the `<num>`
indicates the number of atoms in the cumulated chain.
For example penta-2,3-diene is TH3, hexa-2,3,4-triene
is CT4.

Helical and Atropisomeric geometries can not be stored
in SMILES.

## Rules

Each entry contains the set of the CIP sequence rules
required to get the recommended answer.
  
  '1a,2,5'  Requires Rule 1a, 2, and 5.

## Version History

v1.0 2018-MM-DD
	- Initial public release

## John's TODO List

 - Renumber 'VS<num>' once final set is decided upon
 - Manually review 12 entries not support by CDK/Centres
 		> MV116_070, AY236_207, MV64_053, AY236_033, AY236_032,
 		  AY236_187, AY236_186, AY236_133, AY236_132, MV64_015,
 		  AY236_135, AY236_134
 - Manually clean-up/rotate 2D layouts, in particular those
   listed above 
    > MV116_070, AY236_207, MV64_053, AY236_033, AY236_032,
 		  AY236_187, AY236_186, AY236_133, AY236_132, MV64_015,
 		  AY236_135, AY236_134
   and 
 		> BH64_081, AY236_188, AY236_189, MV64_068
 - Mark or remove planar chirality geometies? e.g. AY236_071
 		> No supported/tested by us
 - Manually stereo in 2D/0D when not labelled. Due to the way the file was 
   created additional markings should be added for example
    > C[C@H](O)[C@](O)[C@H](C)O
   instead of (currently)
    > C[C@H](O)C(O)[C@H](C)O
 - Extra
 	> Truncated titles in BH64_073/BH64_074
 	> L_008 missing CIP label 2S
 	> Updated AY236_179 labels
 	> Fix mass numbers in BH64_079 and BH64_078
