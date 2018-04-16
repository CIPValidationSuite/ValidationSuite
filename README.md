# Validation Suite for Cahn-Ingold-Prelog (CIP) descritpors

Please Cite:

Robert M. Hanson, John W. Mayfield, Mikko J. Vainio, Andrey Yerin, Sophia Musacchio, and Dmitry Redkin. **Algorithmic analysis of Cahn-Ingold-Prelog rules of stereochemistry: Proposals for revised rules and a guide for machine implementation** (Under Preparation)

This repository provides a collection for chemical structures for validating CIP descritpor naming.

#### Format

The CIP descriptors are described as follows,

```
num    := [1-9] | [1-9] [0-9]+
desc   := R, r, S, s, E, Z, seqCis, seqTrans, M, P, m, p
label  := <num> <desc> | <num> '-' <num> <desc> 
labels := label+
```

For example:

```
C[C@H:2](CC)CO 2R       second atom is 'R'
C/[CH:2]=[CH:3]/C 2-3E  bond between 2 and 3 is 'E'       
```

Atom numbering starts at 1.
