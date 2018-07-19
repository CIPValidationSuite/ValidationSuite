# Validation Suite for Cahn-Ingold-Prelog (CIP) descritpors

These files provide a collection of chemical structures for validating 
Cahn-Ingold-Prelog (CIP) descriptor labelling implementations.

## Click [here](https://cipvalidationsuite.github.io/ValidationSuite/) to browse the structures

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
input format. Explicit hydrogens are counted in this numbering but hydrogens 
specified as an atom property '[C@H]' are not. For example in SMILES 
(R)-butan-2-ol could be labelled as:

	C[C@H](CC)O 2R
	CC[C@H](C)O 3R
	C[CH2][C@H](C)O 3R
	CC([H])([H])[C@H](C)O 5R

When a stereo unit spans multiple atoms two and only the two 'end' atoms are
labelled.

	C/C=C/C 2E 3E
	CC=[C@]=CC 2M 4M

T
## Stereo Units

Each entry lists the CIP stereo unit found.

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

Note Helicicene and Atropisomeric stereochemistry can not be stored
in SMILES.

## Rules

Each entry contains the set of the CIP sequence rules
required to get the recommended answer.
  
  '1a,2,5'  Requires Rule 1a, 2, and 5.

## Version History

 * v1.0 2018-05-20, **Initial public release**
