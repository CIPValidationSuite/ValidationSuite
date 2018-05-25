var jsmol = "https://chemapps.stolaf.edu/jmol/jsmol/cip.htm?load=https://cipvalidationsuite.github.io/ValidationSuite/mol3d/";
var data = [
{"id":"VS001","sunits":"TH","bbref":"P-93.5.3.3","smiles":"C1[C@]2(CCCC1)CC=CC2"},
{"id":"VS002","bbref":"P-93.5.1.4.1","smiles":"C1=CCC=CC=C1"},
{"id":"VS003","sunits":"TH","bbref":"P-93.3.3.2","smiles":"C[S@@](=O)C"},
{"id":"VS004","bbref":"P-93.5.4.1","smiles":"C1=CC=C2C(=C1)CCC=C2"},
{"id":"VS005","sunits":"TH","smiles":"OC=1C=CC=CC1[C@H](C2=CC=CC=C2O)O"},
{"id":"VS006","sunits":"TH","smiles":"C1[C@@]2(C[C@@]3(C[C@]1(C[C@](C2)(C3)[H])[H])[H])[H]"},
{"id":"VS007","sunits":"TH","smiles":"O[C@@H](C=1C=CC=C[13CH]1)C=2[13CH]=CC=CC2"},
{"id":"VS008","sunits":"TH","bbref":"P-93.5.2.3","smiles":"C=1[C@@]2(C=C[C@](C1)(C=C2)[H])[H]"},
{"id":"VS009","sunits":"TH","smiles":"[C@@]12([C@]3([C@]4([C@@]2([C@@]5([C@@]4([H])[C@]3([C@@]51[H])[H])[H])[H])[H])[H])[H]"},
{"id":"VS010","cip":"9P 10P","sunits":"HE","bbref":"P-92.1.2.2.1","smiles":"C=1C=2C(=C3C=4C5=C(C=CC4C=CC3=CC2)C=CC=C5)C6=C(C1)C=CC=C6"},
{"id":"VS011","cip":"9M 10M","sunits":"HE","bbref":"P-92.1.2.2.1","smiles":"C=1C=2C(=C3C=4C5=C(C=CC4C=CC3=CC2)C=CC=C5)C6=C(C1)C=CC=C6"},
{"id":"VS012","sunits":"TH","smiles":"C1=C2CC=C3[C@]24C(CC=C4C1)=CC3"},
{"id":"VS013","cip":"6E 7Z 8Z 9E","sunits":"CT","bbref":"P-93.4.2.1.3","srules":"1a","smiles":"CC\\C(\\C(\\C)=N\\O)=N\\O"},
{"id":"VS014","cip":"14R","sunits":"TH","bbref":"P-93.3.4.1","srules":"1a","smiles":"[O-][N+](C=1C=CC(=CC1)[S@@](OCC)=O)=O"},
{"id":"VS015","cip":"7R","sunits":"TH","bbref":"P-92.2.1.1.1","srules":"1a","smiles":"[SiH3][C@]([GeH3])(OC)SC"},
{"id":"VS016","cip":"9R 11R","sunits":"TH","bbref":"P-93.4.1.2","srules":"1a","smiles":"O=C([C@H]([C@H]([C@@H](C(O)=O)Cl)Cl)Cl)O"},
{"id":"VS017","cip":"9S 11S","sunits":"TH","bbref":"P-93.4.1.2","srules":"1a","smiles":"O=C([C@@H]([C@H]([C@H](C(O)=O)Cl)Cl)Cl)O"},
{"id":"VS018","cip":"3E 4E 15S 16R","sunits":"CT,TH","bbref":"P-93.5.2.3","srules":"1a","smiles":"C1[C@@]2(C=C[C@](CCCCCC\\C=C\\C1)(CC2)[H])[H]"},
{"id":"VS019","cip":"5E 7E","sunits":"CT","bbref":"P-93.5.1.4.1","srules":"1a","smiles":"C1CCCCC\\C=C\\C1"},
{"id":"VS020","cip":"15Z 16Z","sunits":"CT","bbref":"P-92.4.1","srules":"1a","smiles":"CCCCCCCCCC/C(=C(\\C#N)/Br)/I"},
{"id":"VS021","cip":"5R","sunits":"TH","bbref":"P-93.1.1, P-93.4.1.1","srules":"1a","smiles":"C[C@H](CC)O"},
{"id":"VS022","cip":"6S","sunits":"TH","bbref":"P-93.4.1.1","srules":"1a","smiles":"C[C@](CC)([2H])O"},
{"id":"VS023","cip":"13M 14M","sunits":"AT","bbref":"P-93.5.4.1","srules":"1a","smiles":"O=C1CC=2C(C=3C(C1)=CC=CC3[N+]([O-])=O)=C(C=CC2)[N+]([O-])=O"},
{"id":"VS024","cip":"6S 7S 9R 10R","sunits":"TH","bbref":"P-93.5.2.1","srules":"1a","smiles":"C[C@H]1[C@@]2(CC[C@]1([C@H](C2=O)Br)[H])[H]"},
{"id":"VS025","cip":"13R","sunits":"TH","srules":"1a","smiles":"FC(CN1[C@@H](C2=CC=CS2)CCC1)(F)F"},
{"id":"VS026","cip":"6Z 7Z 9E 11E 12R 13S","sunits":"CT,TH","bbref":"P-93.5.1.4.1","srules":"1a","smiles":"O[C@@H]/1CC/C=C\\CC[C@H](\\C=C1)[C@@H](C)C"},
{"id":"VS027","cip":"7R 8S","sunits":"TH","srules":"1a","smiles":"Cl[C@@H]([C@]1(CCCO1)[H])F"},
{"id":"VS028","cip":"10S 11S 12R","sunits":"TH","bbref":"P-93.5.3.1","srules":"1a","smiles":"C[C@H]1CCC[C@@]12C[C@H](CCC2)C"},
{"id":"VS029","cip":"9S 10S 11R","sunits":"TH","bbref":"P-93.5.1.1.1","srules":"1a","smiles":"O=C(C1([C@@H]([C@H]([C@@H](C1)Cl)Cl)Cl)C(=O)O)O"},
{"id":"VS030","cip":"9R 10R 11S","sunits":"TH","bbref":"P-93.5.1.3.1","srules":"1a","smiles":"O=C(C1([C@H]([C@@H]([C@H](C1)Cl)Cl)Cl)C(=O)O)O"},
{"id":"VS031","cip":"19R","sunits":"TH","bbref":"P-93.2.2","srules":"1a","smiles":"[Br-].C[N@+](C=1C=CC=CC1)(CC=2C=CC=CC2)CC=C"},
{"id":"VS032","cip":"3Z 4Z 10S","sunits":"CT,TH","srules":"1a","smiles":"O[C@H](/C=N\\C)C1=NC=CC=C1"},
{"id":"VS033","cip":"3Z 4Z 10S","sunits":"CT,TH","srules":"1a","smiles":"O[C@H](/C=N\\C)C=1N=CC=CC1"},
{"id":"VS034","cip":"7R 8S 9S","sunits":"TH","bbref":"P-93.5.1.3.1","srules":"1a","smiles":"Br[C@H]1[C@H](C[C@H](CC1)Br)Br"},
{"id":"VS035","cip":"8R 9R 10S","sunits":"TH","srules":"1a","smiles":"O[C@@H]1CCCC[C@]1([C@@H](F)Cl)[H]"},
{"id":"VS036","cip":"1Z 2Z","sunits":"CT","bbref":"P-93.4.2.1.3","srules":"1a","smiles":"N(=N\\C1=CC=CC=C1)\\C2=CC=CC=C2"},
{"id":"VS037","cip":"13R","sunits":"TH","bbref":"P-93.5.3.1","srules":"1a","smiles":"C1=CC2=C([C@@]13N=CCO3)C=CC=C2"},
{"id":"VS038","cip":"8R","sunits":"TH","srules":"1a","smiles":"CC(C)O[P@](C)(F)=O"},
{"id":"VS039","cip":"8S","sunits":"TH","srules":"1a","smiles":"CC(C)O[P@@](C)(F)=O"},
{"id":"VS040","cip":"5R 19S 20S 24R 27R","sunits":"TH","bbref":"P-93.5.3.1","srules":"1a","smiles":"N1C[C@@]2(C3=C1C4=C(C=C3)OC(C=CO4)(C)C)C([C@@]5(C[C@@]67C(N([C@]5(C2)CN6CC[C@@]7(C)O)C)=O)[H])(C)C"},
{"id":"VS041","cip":"12E 13E","sunits":"CT","bbref":"P-93.5.1.4.2.1","srules":"1a","smiles":"C/C(=C/1\\C=2C(=CC=CC2)C=C1)/CC"},
{"id":"VS042","cip":"9E 10E","sunits":"CT","srules":"1a","smiles":"CC1=C(C=CC=C1)/N=N/P(=O)([O-])OC"},
{"id":"VS043","cip":"14R 15R","sunits":"TH","bbref":"P-93.5.2.1","srules":"1a","smiles":"C[C@]12C[C@@](CCC1)(CCCCCCCC2)[H]"},
{"id":"VS044","cip":"6E 7E","sunits":"CT","srules":"1a","smiles":"COP(=O)(/N=N/C1=CC(=CC=C1)F)[O-]"},
{"id":"VS045","cip":"11S","sunits":"TH","bbref":"P-93.2.3","srules":"1a","smiles":"CC[N@@+](C=1C=CC=CC1)([O-])C"},
{"id":"VS046","cip":"8R 10R","sunits":"TH","bbref":"P-93.5.1.3.2","srules":"1a","smiles":"O=C([C@]1([C@@H](CCC1)Cl)Cl)O"},
{"id":"VS047","cip":"7R 8S","sunits":"TH","bbref":"P-93.4.1.2","srules":"1a","smiles":"O=C(O)[C@H]([C@H](C)Cl)O"},
{"id":"VS048","cip":"7S 8S","sunits":"TH","bbref":"P-91.3, P-93.4.1.2","srules":"1a","smiles":"O=C(O)[C@@H]([C@H](C)Cl)O"},
{"id":"VS049","cip":"8E 9E 10E 11Z 12E 13Z","sunits":"CT","bbref":"P-93.4.2.1.2","srules":"1a","smiles":"O=S(\\C=C(/C=C/C(=O)O)\\C(=C\\C)\\Cl)(=O)O"},
{"id":"VS050","cip":"11S 12S 13R 14R","sunits":"TH","bbref":"P-93.5.4.1, P-93.5.4.2","srules":"1a","smiles":"C1[C@]2([C@@](C[C@]3([C@@]1(CCCC3)[H])[H])(CCCC2)[H])[H]"},
{"id":"VS051","cip":"28R 29R 31R","sunits":"TH","bbref":"P-93.1.4","srules":"1a","smiles":"CC1=C2CC[C@](OC2=C(C(=C1O)C)C)(CCC[C@@H](CCC[C@@H](CCCC(C)C)C)C)C"},
{"id":"VS052","cip":"13R 15R 16S","sunits":"TH","bbref":"P-93.5.3.1","srules":"1a","smiles":"O[C@@H]1C[C@@]2(CC[C@@]1(O)C)C(CCCC2(C)C)=O"},
{"id":"VS053","cip":"6E 7E 8E 9E 15E 16E 17E 18E 21R","sunits":"CT,TH","bbref":"P-93.4.2.4","srules":"1a","smiles":"C/C=C/C=C/CC(OC[C@H](OC(C/C=C/C=C/C)=O)CO)=O"},
{"id":"VS054","cip":"24S","sunits":"TH","bbref":"P-93.2.2","srules":"1a","smiles":"[Br-].OC=1C=CC([P@+]2(CCC3=CC=CC=C3C2)C4=CC=CC=C4)=CC1"},
{"id":"VS055","cip":"14P 17P","sunits":"AT","srules":"1a","smiles":"BrC=1C(=C(C=CC1)C(=O)O)C=2C(=CC=CC2Br)C(=O)O"},
{"id":"VS056","cip":"21S 22S","sunits":"TH","bbref":"P-93.5.4.1","srules":"1a","smiles":"O=C(O[C@@H]1[C@@H](SC2=C(N(C1=O)CCN(C)C)C=CC=C2)C3=CC=C(C=C3)OC)C"},
{"id":"VS057","cip":"15M 18M","sunits":"AT","bbref":"P-93.5.7.1","srules":"1a","smiles":"[O-][N+](C=1C(=C(C=CC1)C(=O)O)C2=C(C=CC=C2[N+]([O-])=O)C(=O)O)=O"},
{"id":"VS058","cip":"4Z 5Z 6E 7E","sunits":"CT","bbref":"P-93.4.2.1.2","srules":"1a","smiles":"CC/C=C\\C=C\\CC"},
{"id":"VS059","cip":"13R","sunits":"TH","srules":"1a","smiles":"C[N@+](CCC)(CC)C=1C=CC=CC1"},
{"id":"VS060","cip":"3Z 4Z","sunits":"CT","bbref":"P-90, P-91.3, P-93.4.2.1.1","srules":"1a","smiles":"C/C=C\\C"},
{"id":"VS061","cip":"3E 4E","sunits":"CT","bbref":"P-93.4.2.1.1","srules":"1a","smiles":"C/C=C/C"},
{"id":"VS062","cip":"6Z 7Z","sunits":"CT,TH","bbref":"P-93.5.3.3","srules":"1a","smiles":"C1[C@@]/2(CC=C1)CCCCC/C=C2"},
{"id":"VS063","cip":"1S 27E 28E 44R","sunits":"CT4,TH","bbref":"P-93.5.2.3","srules":"1a","smiles":"[C@@H]/1(CCCCCCCCCCCCCCCCCCCCCCC[C@]2(CC1=C=C=C/CCCCCCCCCCCCCCCCC2)[H])O"},
{"id":"VS064","cip":"7R","sunits":"TH","bbref":"P-92.2.1.3","srules":"1a","smiles":"CC[C@H](C1CC1)Cl"},
{"id":"VS065","cip":"11R 12R 13S 14R","sunits":"TH","bbref":"P-93.5.4.2","srules":"1a","smiles":"C1[C@@]2([C@@](N[C@]3([C@@]1(CCCC3)[H])[H])(CCCC2)[H])[H]"},
{"id":"VS066","cip":"5S 6S","sunits":"TH","bbref":"P-93.1.1","srules":"1a","smiles":"C[C@@H]([C@H](C)Br)O"},
{"id":"VS067","cip":"5R 6R","sunits":"TH","bbref":"P-93.1.2.1","srules":"1a","smiles":"C[C@H]([C@@H](C)Br)O"},
{"id":"VS068","cip":"9R","sunits":"TH","bbref":"P-93.2.4","srules":"1a","smiles":"[Na+].S=[P@@]([O-])(C)OC(C)C"},
{"id":"VS069","cip":"6S 7R","sunits":"TH","bbref":"P-93.5.2.3","srules":"1a","smiles":"C=1[C@]2(CC[C@@](C1)(C2)[H])[H]"},
{"id":"VS070","cip":"15R 17S 18S 20R 22R 23S 24S 25S","sunits":"TH","srules":"1a","smiles":"C[C@]12[C@@]3([C@](CC[C@@H]1O)(OC2=O)[C@@]4(CC[C@]5(O)C[C@]4(CC5=C)[C@H]3C(=O)O)[H])[H]"},
{"id":"VS071","cip":"12S","sunits":"TH","bbref":"P-93.2.3","srules":"1a","smiles":"O=[P@@](C=1C=CC=CC1)(C)CCC"},
{"id":"VS072","cip":"19M 23M 28S","sunits":"AT,TH","bbref":"P-93.5.7.1","srules":"1a","smiles":"OC=1C(C=2C(=CC=C3C2C=CC=C3)OC(=O)[C@H]4CC4(C)C)=C5C=CC=CC5=CC1"},
{"id":"VS073","cip":"13M 16M","sunits":"AT","srules":"1a","smiles":"NC=1C(C=2C(=CC=CC2N)OC)=C(C=CC1)C(=O)O"},
{"id":"VS074","cip":"8S","sunits":"TH","bbref":"P-93.3.4.1","srules":"1a","smiles":"C[S@](=O)C=1C=CC=CC1"},
{"id":"VS075","cip":"10R 11S 12S 13S 14R","sunits":"TH","bbref":"P-93.5.2.1","srules":"1a","smiles":"O[C@@H]1[C@]2(C[C@H](C[C@@]([C@H](CC1)OC)(O2)[H])I)[H]"},
{"id":"VS076","cip":"4R","sunits":"TH","srules":"1a","smiles":"Cl[C@@H](O)C"},
{"id":"VS077","cip":"4S","sunits":"TH","srules":"1a","smiles":"Cl[C@H](O)C"},
{"id":"VS078","cip":"27P 28P 44R","sunits":"TH,TH3","bbref":"P-93.5.2.3","srules":"1a","smiles":"C1CCCCCCCCCCCCCCCCCCCC[C@@]2(CCCCCCCCCCCCCCCCCCCC(=[C@@]=C1[H])C2)[H]"},
{"id":"VS079","cip":"4M 5M","sunits":"TH3","bbref":"P-93.4.2","srules":"1a","smiles":"ClC(=[C@@]=C(Cl)[H])[H]"},
{"id":"VS080","cip":"7R 8S","sunits":"TH","bbref":"P-92.2.1.3","srules":"1a","smiles":"C[C@H]1[C@H](CCCC1)C"},
{"id":"VS081","cip":"14S","sunits":"TH","srules":"1a","smiles":"C#CCN1[C@@H](CCCC1)C2=CN=CC=C2"},
{"id":"VS082","cip":"13R 15R","sunits":"TH","bbref":"P-93.5.4.1","srules":"1a","smiles":"C[C@@]12CC3=C(C[C@]1(CCCC2)[H])C=CC=C3"},
{"id":"VS083","cip":"20S","sunits":"TH","srules":"1a","smiles":"O[C@@H](C(CCC1C=C1)(CCC2C=C2)CCC3C=C3)[C@@]45C=C[C@@](C=C4)(C=C5)[H]"},
{"id":"VS084","cip":"5R 6R 7S 8S","sunits":"TH","bbref":"P-93.5.2.1","srules":"1a","smiles":"O1[C@@]2([C@@]3(CO[C@@]([C@@]21[H])([H])O3)[H])[H]"},
{"id":"VS085","cip":"8E 9E","sunits":"CT","bbref":"P-93.5.1.4.2.1","srules":"1a","smiles":"ClC=1\\C(\\C=C2C1C=CC=C2)=C\\C"},
{"id":"VS086","cip":"15P 18P","sunits":"AT","bbref":"P-93.5.7.1","srules":"1a","smiles":"[O-][N+](C1=C(C=2C(=CC=C(C2)OC)OC)C(=CC=C1)C(=O)O)=O"},
{"id":"VS087","cip":"8E 9E 10E 11E 24S 26S","sunits":"CT,TH","bbref":"P-93.6","srules":"1a","smiles":"C[C@@H](C=1C=CC(\\C=C\\O/C=C/C=2C=CC(=CC2)[C@H](C)C(=O)O)=CC1)C(=O)O"},
{"id":"VS088","cip":"8Z 9E 10E 11Z 24S 26S","sunits":"CT,TH","bbref":"P-93.6","srules":"1a","smiles":"C[C@@H](C=1C=CC(/C=C\\O/C=C/C=2C=CC(=CC2)[C@H](C)C(=O)O)=CC1)C(=O)O"},
{"id":"VS089","cip":"4R","sunits":"TH","srules":"1a","smiles":"COC[C@]1([H])OC1"},
{"id":"VS090","cip":"5R","sunits":"TH","bbref":"P-92.1.4.2","srules":"1a","smiles":"C[C@H](C=C)O"},
{"id":"VS091","cip":"15S 16R 17S 18S 19S 20R","sunits":"TH","srules":"1a","smiles":"C[C@@]12CCC[C@]3([C@@]14[C@@]5([C@@]6(CC2)CCC[C@]5(CC3)S6)O4)O"},
{"id":"VS092","cip":"6R","sunits":"TH","bbref":"P-92.2.1.2","srules":"1a","smiles":"O[C@H](CO)C=O"},
{"id":"VS093","cip":"5E 6E 8Z 9Z","sunits":"CT","bbref":"P-93.5.1.4.1","srules":"1a","smiles":"C1CCCC/C=C\\C=C\\C1"},
{"id":"VS094","cip":"10R","sunits":"TH","bbref":"P-91.3","srules":"1a","smiles":"Cl[C@@H](C=1C=CC=CC1)CC"},
{"id":"VS095","cip":"24S","sunits":"TH","bbref":"P-93.5.4.1","srules":"1a","smiles":"[Cl-].OC=1C=CC([P@+]2(CCC3=CC=CC=C3C2)C=4C=CC=CC4)=CC1"},
{"id":"VS096","cip":"3Z 13Z","sunits":"CT","bbref":"P-93.4.2.1.3","srules":"1a","smiles":"O/N=C(\\C1=CC=C(C=C1)Cl)/C2=CC=CC=C2"},
{"id":"VS097","cip":"17R","sunits":"TH","srules":"1a","smiles":"O=C1N=C([N-]C=2C=CC=CC2)[C@H](C(N1)=O)C#N"},
{"id":"VS098","cip":"8R 9S 10R","sunits":"TH","bbref":"P-93.5.1.1.1","srules":"1a","smiles":"O[C@H]1[C@@H](CC[C@H](C1)C)[C@@H](C)C"},
{"id":"VS099","cip":"6R","sunits":"TH","bbref":"P-92.1.4.3","srules":"1a","smiles":"CC([C@@H](O)C1CC1)C"},
{"id":"VS100","cip":"3Z 4Z 5E 6E","sunits":"CT","bbref":"P-93.4.2.1.2","srules":"1a","smiles":"C/C=C\\C=C\\CCC"},
{"id":"VS101","cip":"6Z 7E 8Z 9E","sunits":"CT","bbref":"P-93.5.1.4.2.1","srules":"1a","smiles":"C/C=C/1\\C\\C(\\CC1)=C\\C"},
{"id":"VS102","cip":"11R 12R 13S 15S","sunits":"TH","bbref":"P-93.1.2.2","srules":"1a","smiles":"Cl[C@H]1C[C@@H](C[C@@H](C1)[N+]([O-])=O)O[C@H](CC)C"},
{"id":"VS103","cip":"11R 12R 14R 15R","sunits":"TH","bbref":"P-93.4.1.2","srules":"1a","smiles":"O=C([C@H]([C@H]([C@@H]([C@@H]([C@@H](C(O)=O)Cl)Cl)Cl)Cl)Cl)O"},
{"id":"VS104","cip":"6R","sunits":"TH","bbref":"P-93.2.6","srules":"1a","smiles":"C[Si@H](CCC)O"},
{"id":"VS105","cip":"14S 15R 16S 17S 18R","sunits":"TH","bbref":"P-92.2.1.1.3","srules":"1a","smiles":"FC[C@H]([C@@H]([C@H]([C@@H]([C@H](CF)F)CCBr)O)CCI)F"},
{"id":"VS106","cip":"8S 9R","sunits":"TH","bbref":"P-93.5.4.1","srules":"1a","smiles":"N1CC[C@@]2([C@@]1(CCCC2)[H])[H]"},
{"id":"VS107","cip":"6Z 7E 8E 10E 11Z 12E","sunits":"CT","bbref":"P-93.4.2.1.2","srules":"1a","smiles":"C\\C=C(/C(=C\\C=C\\C)/CC(=O)O)\\Cl"},
{"id":"VS108","cip":"6R 7R","sunits":"TH","bbref":"P-93.5.1.1.1","srules":"1a","smiles":"C[C@H]1[C@@H](C[C@@H](C1)C)C"},
{"id":"VS109","cip":"6R","sunits":"TH","bbref":"P-92.2.1.2","srules":"1a","smiles":"C=C[C@H](C=O)O"},
{"id":"VS110","cip":"11E 20E","sunits":"CT","bbref":"P-93.4.2.1.1","srules":"1a","smiles":"ClC1=CC=C(C=C1)\\C(=C\\C2=CC=CC=C2)\\C3=CC=CC=C3"},
{"id":"VS111","cip":"6S 7S 8S 9R","sunits":"TH","bbref":"P-93.5.2.2.1","srules":"1a","smiles":"F[C@H]1[C@@]2(C[C@H]([C@]1(CC2)[H])Br)[H]"},
{"id":"VS112","cip":"7R 8R","sunits":"TH","bbref":"P-93.1.1, P-93.5.1.1.1","srules":"1a","smiles":"O=C([C@@H]1[C@@H](CCC1)Cl)O"},
{"id":"VS113","cip":"7R 8S","sunits":"TH","bbref":"P-93.1.2.1","srules":"1a","smiles":"Cl[C@@H]1[C@H](CCC1)C(=O)O"},
{"id":"VS114","cip":"6Z 7Z","sunits":"CT","bbref":"P-93.4.2.1.1","srules":"1a","smiles":"N#C/C(=C(\\Br)/I)/Br"},
{"id":"VS115","cip":"14S 15R 16R 17S 18R","sunits":"TH","bbref":"P-92.2.1.1.3","srules":"1a","smiles":"FC[C@H]([C@@H]([C@H]([C@@H]([C@H](CCl)F)CCBr)O)CCI)F"},
{"id":"VS116","cip":"10R 11R","sunits":"TH","bbref":"P-93.5.1.3.2","srules":"1a","smiles":"Br[C@]1(C[C@@](CCC1)(CC)C)Cl"},
{"id":"VS117","cip":"5Z 6Z","sunits":"CT","bbref":"P-93.4.2.1.1","srules":"1a","smiles":"I/C(=C(/Cl)\\Br)/Br"},
{"id":"VS118","cip":"3E 6E","sunits":"CT4","srules":"1a","smiles":"Br\\C=C=C=C\\Cl"},
{"id":"VS119","cip":"6R 7R","sunits":"TH","bbref":"P-93.4.1.2","srules":"1a","smiles":"C[C@H]([C@@](C)(Cl)[2H])Cl"},
{"id":"VS120","cip":"1R 27P 28P 42R","sunits":"TH,TH3","bbref":"P-93.5.2.3","srules":"1a","smiles":"[C@H]1(CCCCCCCCCCCCCCCCCCCCCC[C@@]2(CCCCCCCCCCCCCCCCCC(=[C@]=C1C2)[H])[H])C(=O)O"},
{"id":"VS121","cip":"8E 13E","sunits":"CT","bbref":"P-91.3","srules":"1a","smiles":"Cl\\C\\1=C\\CCCCCCCCCC1"},
{"id":"VS122","cip":"11S","sunits":"TH","bbref":"P-93.2.4","srules":"1a","smiles":"O=[P@@](C=1C=CC=CC1)(C)OC"},
{"id":"VS123","cip":"7S","sunits":"TH","bbref":"P-92.2.1.3","srules":"1a","smiles":"O[C@H](C1CCC1)C2CC2"},
{"id":"VS124","cip":"21S 22R","sunits":"TH","bbref":"P-92.6","srules":"1a","smiles":"C[C@H](Br)C=1C=C2C=C(C1CCC=3C=CC(=CC3)CC2)[C@@H](C)Br"},
{"id":"VS125","cip":"8E 15E 16S 17S","sunits":"CT,TH","srules":"1a","smiles":"O=C(C1=CC=NC=C1)N/N=C\\2/[C@@]3([C@@](C2)(C=CC3)[H])[H]"},
{"id":"VS126","cip":"6E 7Z 8Z 9E 27E 28E 30E 31E 46R 47S 48R 49S 50R 51S","sunits":"CT,TH","bbref":"P-93.6","srules":"1a","smiles":"O=C([C@H]1C[C@H]([C@@H](OC=2C=CC(/C=C\\O/C=C/C=3C=CC(=CC3)O[C@H]4[C@H](C[C@H](CC4)C(=O)O)O/C=C/C=5C=CC=CC5)=CC2)CC1)O/C=C/C=6C=CC=CC6)O"},
{"id":"VS127","cip":"6E 7E 8E 9E 27E 28E 30E 31E 46S 47R 48S 49R 50S 51R","sunits":"CT,TH","bbref":"P-93.6","srules":"1a","smiles":"O=C([C@@H]1C[C@@H]([C@H](OC=2C=CC(\\C=C\\O/C=C/C=3C=CC(=CC3)O[C@@H]4[C@@H](C[C@@H](CC4)C(=O)O)O/C=C/C=5C=CC=CC5)=CC2)CC1)O/C=C/C=6C=CC=CC6)O"},
{"id":"VS128","cip":"7S 9S 11S","sunits":"TH","srules":"1a","smiles":"C[C@H]1C[C@@]2(C[C@H](C)N1[C@@H](C)C2)[H]"},
{"id":"VS129","cip":"7R 9R 11R","sunits":"TH","srules":"1a","smiles":"C[C@@H]1C[C@]2(C[C@@H](C)N1[C@H](C)C2)[H]"},
{"id":"VS130","cip":"11S","sunits":"TH","bbref":"P-93.2.5","srules":"1a","smiles":"O=[S@@](=S)(C=1C=CC=CC1)OC"},
{"id":"VS131","cip":"12S 13R","sunits":"TH","bbref":"P-93.5.3.1","srules":"1a","smiles":"C1[C@@]2(CC[C@@]13OCCC3)CCCO2"},
{"id":"VS132","cip":"13S 15S","sunits":"TH","bbref":"P-93.5.4.1","srules":"1a","smiles":"CC=1C=CC=2[N@]3C[N@](C4=C(C3)C=C(C=C4)C)CC2C1"},
{"id":"VS133","cip":"8S","sunits":"TH","srules":"1a","smiles":"C#CCOC[C@H]1OC1"},
{"id":"VS134","cip":"17R","sunits":"TH","srules":"1a","smiles":"O[C@@H]1C=CC2=CC3=CC4=C5C6=C(C=CC7=C6C8=C(C=C7)C=C9CC%10=CC=CC%11=C%10C%12=C9C8=C5C3=C%12C2=C1%11)C=C4"},
{"id":"VS135","cip":"5Z 6Z","sunits":"CT4","bbref":"P-93.4.2.3","srules":"1a","smiles":"C/C=C=C=C\\C"},
{"id":"VS136","cip":"12R 13S","sunits":"TH","bbref":"P-91.3","srules":"1a","smiles":"O=C(O[C@@H](C)CC)CC[C@@H](CC)Cl"},
{"id":"VS137","cip":"5Z 6Z","sunits":"CT","bbref":"P-93.4.2.1.1","srules":"1a","smiles":"C/C=C(/C)\\C(=O)O"},
{"id":"VS138","cip":"11R","sunits":"TH","bbref":"P-93.3.4.1","srules":"1a","smiles":"C[P@@](C=1C=CC=CC1)CCC"},
{"id":"VS139","cip":"5R","sunits":"TH","bbref":"P-93.1.3","srules":"1a","smiles":"CC[C@@H](C)Br"},
{"id":"VS140","cip":"2E 5E","sunits":"CT","bbref":"P-93.5.1.4.1","srules":"1a","smiles":"C1/C=C/CCCCC1"},
{"id":"VS141","cip":"3P 7P 8Z 9Z","sunits":"TH5,CT","bbref":"P-93.4.2","srules":"1a","smiles":"C/C=C\\C(=C=[C@]=C=C(O)[H])[H]"},
{"id":"VS142","cip":"6S","sunits":"TH","bbref":"P-92.2.1.3","srules":"1a","smiles":"O[C@@H](C1CC1)C=O"},
{"id":"VS143","cip":"11S 12S 13S","sunits":"TH","srules":"1a","smiles":"Cl[C@]12CCCC[C@@]1(CC[C@@H](C2)F)O"},
{"id":"VS144","cip":"6P 7P","sunits":"TH3","srules":"1a","smiles":"NC(=[C@]=C(C)O)Br"},
{"id":"VS145","cip":"6R","sunits":"TH","bbref":"P-91.3, P-92.2.1.2","srules":"1a","smiles":"C=C[C@@H](CC)O"},
{"id":"VS146","cip":"9Z 10Z 11E 12E 13E 14E 16Z 17Z 23S 24R","sunits":"CT,TH","bbref":"P-93.4.2.4","srules":"1a","smiles":"CCCCC/C=C\\C[C@H](/C=C/C=C/C=C\\[C@H](CCCC(O)=O)O)O"},
{"id":"VS147","cip":"5S","sunits":"TH","bbref":"P-93.3.4.1","srules":"1a","smiles":"O=[S@](CC)C"},
{"id":"VS148","cip":"5E 6E","sunits":"CT","bbref":"P-93.4.2.1.1","srules":"1a","smiles":"O=C(\\C=C\\C(=O)O)O"},
{"id":"VS149","cip":"5R","sunits":"TH","bbref":"P-92.2.1.1.2","srules":"1a","smiles":"C[C@H](CO)Cl"},
{"id":"VS150","cip":"10R 11S","sunits":"TH","srules":"1a","smiles":"C[C@]12CCCC[C@@]1(CCOC2)[H]"},
{"id":"VS151","cip":"6R","sunits":"TH","bbref":"P-92.2.1.2","srules":"1a","smiles":"C=C[C@H](C#N)O"},
{"id":"VS152","cip":"10R 11R 12R 13S","sunits":"TH","bbref":"P-93.5.2.1","srules":"1a","smiles":"O[C@]12C[C@@]3(C[C@](C1)(C[C@@](C3)(C2)Br)[H])N"},
{"id":"VS153","cip":"4Z 5Z 6E 7E","sunits":"CT","bbref":"P-93.4.2.1.2","srules":"1a","smiles":"C/C=C\\C=C\\C(=O)O"},
{"id":"VS154","cip":"5E 6E 7E 8E","sunits":"CT,CT4","bbref":"P-93.4.2.3","srules":"1a","smiles":"C/C=C=C=C/C=C/C"},
{"id":"VS155","cip":"6Z 7Z 8Z 9Z","sunits":"CT","bbref":"P-93.5.5.1","srules":"1a","smiles":"O=C(O)C=1C=C/2C=CC1/C=C\\C3=CC=C(/C=C2)C(=C3)Br"},
{"id":"VS156","cip":"6R","sunits":"TH","bbref":"P-92.2.1.1.1","srules":"1a","smiles":"C[C@H](OC)SC"},
{"id":"VS157","cip":"9E 10E 11E 12E 26S 28R","sunits":"CT,TH","bbref":"P-93.6","srules":"1a","smiles":"C[C@@](C=1C=CC(\\C=C\\O/C=C/C=2C=CC(=CC2)[C@H](C)C(=O)O)=CC1)(C(=O)O)Br"},
{"id":"VS158","cip":"14P 18P","sunits":"AT","bbref":"P-93.5.7.1","srules":"1a","smiles":"OC=1C(=C(C=C(C1)C)C)C2=C3C=CC=CC3=CC=C2CO"},
{"id":"VS159","cip":"7R 8R 9S 10S","sunits":"TH","bbref":"P-93.5.2.2.1","srules":"1a","smiles":"C[C@@H]1[C@@]2(C[C@](C)(Br)[C@]1(C=C2)[H])[H]"},
{"id":"VS160","cip":"10S 11S 12S","sunits":"TH","srules":"1a","smiles":"O=C(OC[C@H]1C[C@@]2(C[C@]1(C=C2)[H])[H])CCl"},
{"id":"VS161","cip":"4Z 5Z 8S","sunits":"CT,TH","bbref":"P-91.3","srules":"1a","smiles":"C/C=C\\CC[C@H](C)Cl"},
{"id":"VS162","cip":"4R","sunits":"TH","bbref":"P-91.3, P-92.2.1.1.1","srules":"1a","smiles":"Cl[C@H](Br)F"},
{"id":"VS163","cip":"6S 7S","sunits":"TH","bbref":"P-92.2.1.1.2","srules":"1a","smiles":"C[C@@H]([C@H](CO)Cl)Cl"},
{"id":"VS164","cip":"27Z 28Z 40R","sunits":"CT4,TH","bbref":"P-93.5.2.3","srules":"1a","smiles":"C/1CCCCCCCCCCCCCCCCCCC[C@@]2(CC1=C=C=C/CCCCCCCCCCCCCCCCCCCCC2)[H]"},
{"id":"VS165","cip":"13R","sunits":"TH","bbref":"P-93.2.4","srules":"1a","smiles":"[Na+].[O-][P@](=S)(OC=1C=CC=CC1)OC"},
{"id":"VS166","cip":"6P 8P","sunits":"TH5","srules":"1a","smiles":"ClC(=C=[C@]=C=C(C(=O)O)[H])[H]"},
{"id":"VS167","cip":"6S","sunits":"TH","bbref":"P-92.2.1.1.2","srules":"1a","smiles":"OC[C@@H](CCl)Cl"},
{"id":"VS168","cip":"6S 7R","sunits":"TH","srules":"1a","smiles":"O[C@@H]([C@H](CC)C)C"},
{"id":"VS169","cip":"6R 7R","sunits":"TH","srules":"1a","smiles":"O[C@@H]([C@@H](CC)C)C"},
{"id":"VS170","cip":"1S","sunits":"TH","srules":"1a","smiles":"[C@H](O)(SI)S#I"},
{"id":"VS171","cip":"20S","sunits":"TH","bbref":"P-92.2.2","srules":"1b","smiles":"O[C@@H](C(CCC1CC1)(CCC2CC2)CCC3CC3)[C@]45CC[C@H](CC4)CC5"},
{"id":"VS172","cip":"5R 6S","sunits":"TH","bbref":"P-92.2.2","srules":"1a,1b","smiles":"C1[C@]2(CC=C[C@@]12[H])[H]"},
{"id":"VS173","cip":"2Z 3Z 12Z 13Z 16Z 17Z 20S","sunits":"CT,TH","srules":"1a,1b","smiles":"O[C@@H](C(/C=C\\C1C=C1)(/C=C\\C2C=C2)/C=C\\C3C=C3)[C@@]45C=C[C@](C=C4)([H])C=C5"},
{"id":"VS174","cip":"5R 7R","sunits":"TH","srules":"1a,1b","smiles":"C1CCC=C[C@]2([C@]1(CCC2)[H])[H]"},
{"id":"VS175","cip":"2R","sunits":"TH","srules":"2","smiles":"C[C@](CC)(CO)[13CH2]C"},
{"id":"VS176","cip":"5Z 6Z","sunits":"CT","srules":"2","smiles":"O/C(/[16OH])=C(\\[18OH])/O"},
{"id":"VS177","cip":"6S","sunits":"TH","bbref":"P-93.2.4","srules":"2","smiles":"[18O-][P@@](=O)(OC)[17O-]"},
{"id":"VS178","cip":"9S","sunits":"TH","srules":"2","smiles":"C[C@]([13CH2]C)([15CH2]C)[14CH2]CC"},
{"id":"VS179","cip":"6S","sunits":"TH","bbref":"P-92.3","srules":"2","smiles":"O[C@@H](C[125I])CI"},
{"id":"VS180","cip":"4S","sunits":"TH","srules":"2","smiles":"[3H][C@](Br)(Cl)[H]"},
{"id":"VS181","cip":"4R","sunits":"TH","srules":"2","smiles":"[2H][C@@](Br)(Cl)[H]"},
{"id":"VS182","cip":"4R","sunits":"TH","bbref":"P-92.3, P-93.4.1.1","srules":"2","smiles":"C[C@](O)([2H])[H]"},
{"id":"VS183","cip":"17R","sunits":"TH","bbref":"P-93.2.5","srules":"2","smiles":"[18O]=[S@](=O)(CC=1C=CC=CC1)C=2C=CC(=CC2)C"},
{"id":"VS184","cip":"3E 4E","sunits":"CT","bbref":"P-93.4.2.1.1","srules":"2","smiles":"C\\C=C(\\[2H])/[H]"},
{"id":"VS185","cip":"3Z 4Z","sunits":"CT","srules":"2","smiles":"[2H]/C(=C(/[1H])\\[H])/[H]"},
{"id":"VS186","cip":"27S","sunits":"TH","bbref":"P-93.2.5","srules":"2","smiles":"[17O]=[S@](=[18O])([O-])OC=1C=CC=CC1.CCCC[N+](CCCC)(CCCC)CCCC"},
{"id":"VS187","cip":"9S","sunits":"TH","bbref":"P-93.4.1.1","srules":"2","smiles":"C[C@@](C=1C=CC=CC1)([2H])[H]"},
{"id":"VS188","cip":"5E 6E 7E 8E","sunits":"CT","bbref":"P-92.4.2","srules":"3","smiles":"C/C=C\\1/C/C(/C1)=C\\C"},
{"id":"VS189","cip":"7Z 8Z 9Z 10Z","sunits":"CT","bbref":"P-93.5.1.4.2.1","srules":"3","smiles":"C/C=C/1\\CC/C(/CC1)=C\\C"},
{"id":"VS190","cip":"7E 8E 9E 10E 11E 12E","sunits":"CT","bbref":"P-93.5.1.4.2.1","srules":"3","smiles":"C/C=C/1\\C/C(/C1)=C/2\\C\\C(\\C2)=C\\C"},
{"id":"VS191","cip":"6Z 7Z 9Z 12Z 13Z 15Z 16Z 18E 19E 20Z 21S","sunits":"CT,TH","bbref":"P-92.4.2.2","srules":"1a,3","smiles":"C/C=C\\C/C(=C\\[C@H](/C=C(/C/C=C\\C)\\C/C=C\\C)O)/C/C=C/C"},
{"id":"VS192","cip":"6Z 13E 14Z 15R 16E","sunits":"CT,TH","srules":"1a,3","smiles":"C/C=C(/CCC[C@@H](CCC/C(=C\\C)/Cl)O)\\Cl"},
{"id":"VS193","cip":"6Z 13E 14Z 15S 16E","sunits":"CT,TH","bbref":"P-92.4.2","srules":"1a,3","smiles":"C/C=C(/CCC[C@H](CCC/C(=C\\C)/Cl)O)\\Cl"},
{"id":"VS194","cip":"4Z 5Z 12E 13E 14R","sunits":"CT,TH","bbref":"P-92.4.2","srules":"1a,3","smiles":"C/C=C\\CCC[C@@H](CCC/C=C/C)O"},
{"id":"VS195","cip":"4Z 5Z 8E 9E 10R","sunits":"CT,TH","bbref":"P-93.4.2.4","srules":"1a,3","smiles":"C/C=C\\C[C@@H](C/C=C/C)O"},
{"id":"VS196","cip":"7R 8S 9S 10R 11S 12R","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"4b","smiles":"Cl[C@H]1[C@H]([C@H]([C@@H]([C@@H]([C@H]1Cl)Cl)Cl)Cl)Cl"},
{"id":"VS197","cip":"7R 8R 9R 10R 11S 12S","sunits":"TH","bbref":"P-92.5.2.2","srules":"4b","smiles":"Cl[C@H]1[C@@H]([C@H]([C@@H]([C@@H]([C@H]1Cl)Cl)Cl)Cl)Cl"},
{"id":"VS198","cip":"20R 21S 22S 23S 24S 25R 26R 27S 28R 29S 30R 31R 32R","sunits":"TH","bbref":"P-92.5.2.2","srules":"1a,4b","smiles":"C[C@@H]([C@H](C([C@@H](C([C@@H]([C@@H](C)Cl)C)([C@H](C)[C@@H](C)Cl)[C@@H](C)[C@@H](C)Cl)O)([C@H](C)[C@H](C)Cl)[C@@H](C)[C@@H](C)Cl)C)Cl"},
{"id":"VS199","cip":"11R 12R 13R 14R 15S","sunits":"TH","bbref":"P-92.5.2.2","srules":"1a,4b","smiles":"O=C([C@H]([C@H]([C@@H]([C@@H]([C@H](C(O)=O)Cl)Cl)Cl)Cl)Cl)O"},
{"id":"VS200","cip":"11R 12S 13S 14R 15R","sunits":"TH","srules":"1a,4b","smiles":"Cl[C@H](C(O)=O)[C@@H]([C@@H]([C@@H]([C@@H](C(O)=O)Cl)Cl)Cl)Cl"},
{"id":"VS201","cip":"11R 12R 13R 14S 15R","sunits":"TH","bbref":"P-92.5.2.2, P-93.4.1.2","srules":"1a,4b","smiles":"O=C([C@H]([C@H]([C@@H]([C@H]([C@@H](C(O)=O)Cl)Cl)Cl)Cl)Cl)O"},
{"id":"VS202","cip":"11R 15R 16S 17R 18R","sunits":"TH","bbref":"P-92.5.2.2","srules":"1a,4b","smiles":"O=C([C@@H](N([C@@H](C)O)[C@@H](C)O)N([C@@H](C)O)[C@H](C)O)O"},
{"id":"VS203","cip":"18R 19S 21R 23S 24S 25R 26S 27R 28S","sunits":"TH","bbref":"P-92.5.2.2","srules":"1a,4b","smiles":"C[C@H]([C@H](ON([C@@H](N(C[C@@H]([C@H](C)O)O)O[C@H]([C@H](C)O)O)Cl)C[C@H]([C@H](C)O)O)O)O"},
{"id":"VS204","cip":"18S 19R 21S 23S 24R 25S 26S 27R 28S","sunits":"TH","srules":"1a,4b","smiles":"C[C@@H]([C@@H](ON([C@@H](N(O[C@@H]([C@@H](C)O)O)C[C@H]([C@H](C)O)O)Cl)C[C@@H]([C@H](C)O)O)O)O"},
{"id":"VS205","cip":"15s 16s 17r 18r 19s 20s","sunits":"TH","bbref":"P-93.5.7.2","srules":"5","smiles":"C[C@H]1CC[C@](CC1)([C@@]2(CC[C@](CC2)([C@@]3(CC[C@@H](CC3)C)[H])[H])[H])[H]"},
{"id":"VS206","cip":"11s 12s 13s 14s","sunits":"TH","bbref":"P-93.5.7.2","srules":"5","smiles":"C[C@@H]1CC[C@@](CC1)([C@@]2(CC[C@@H](CC2)C)[H])[H]"},
{"id":"VS207","cip":"16s 17s 18r 19r 20r 21r","sunits":"TH","srules":"5","smiles":"C[C@H]1CC[C@@]([C@@]2([C@@]3(CC[C@@H](C)CC3)[H])CC[C@@H](C)CC2)(CC1)[H]"},
{"id":"VS208","cip":"25r 26r 39r 44r","sunits":"TH","bbref":"P-93.5.5.2","srules":"5","smiles":"OC=1C2=CC(=C(C1)O)[C@H](C=3C(=CC(=C([C@H](C=4C=C([C@H](C=5C=C([C@H]2CCCCCCCCC)C(=CC5O)O)CCCCCCCCC)C(=CC4O)O)CCCCCCCCC)C3)O)O)CCCCCCCCC"},
{"id":"VS209","cip":"7r 8r 9r 10r 11r 12r","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"5","smiles":"Cl[C@@H]1[C@H]([C@@H]([C@H]([C@@H]([C@H]1Cl)Cl)Cl)Cl)Cl"},
{"id":"VS210","cip":"7s 8s 9s 10s 11s 12s","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"5","smiles":"Cl[C@H]1[C@H]([C@H]([C@H]([C@H]([C@H]1Cl)Cl)Cl)Cl)Cl"},
{"id":"VS211","cip":"9s 10s","sunits":"TH","bbref":"P-93.5.4.1","srules":"5","smiles":"C1[C@@]2(CCCC[C@@]2(CCC1)[H])[H]"},
{"id":"VS212","cip":"9r 10r","sunits":"TH","bbref":"P-93.5.4.1","srules":"5","smiles":"C1[C@@]2(CCCC[C@]2(CCC1)[H])[H]"},
{"id":"VS213","cip":"8r 9r","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"5","smiles":"O[C@H]1CC[C@@](CC1)(Cl)C"},
{"id":"VS214","cip":"13E 14s 15E 16s","sunits":"CT,TH","bbref":"P-93.5.1.4.2.2","srules":"5","smiles":"CC[C@H]1CC/C(/CC1)=C\\2/CC[C@@H](CC2)CC"},
{"id":"VS215","cip":"11s 16s","sunits":"TH","srules":"5","smiles":"C1=NC=2[C@@]3(C(=NC=C4[C@@]3(C1=CC=C4)[H])C=CC2)[H]"},
{"id":"VS216","cip":"11s 16s","sunits":"TH","srules":"5","smiles":"C1=C2[C@]3(C(C=NC4=CC=CC(=N1)[C@]43[H])=CC=C2)[H]"},
{"id":"VS217","cip":"11s 16s","sunits":"TH","srules":"5","smiles":"C1=C2[C@]3(C(C=CC4=CC=CC(=C1)[C@]43[H])=CC=C2)[H]"},
{"id":"VS218","cip":"21s 22s","sunits":"TH","srules":"5","smiles":"C12=CC=C3C4=C5C(=CC=C6C=CC7=CC=C(C=C1)C(=C7[C@]56[H])[C@]24[H])C=C3"},
{"id":"VS219","cip":"5r 6r","sunits":"TH","bbref":"P-92.6","srules":"5","smiles":"O[C@H]1C[C@@H](C1)O"},
{"id":"VS220","cip":"20s 21r 22s 25s","sunits":"TH","bbref":"P-93.5.7.2","srules":"5","smiles":"Br[C@@]1(CC[C@]([C@@]2(CC[C@H](CC2)CCCC)[H])(CC1)[H])C3=CC=C(C=C3)CC"},
{"id":"VS221","cip":"7r 8r","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"5","smiles":"O[C@@H]1CC[C@H](CC1)O"},
{"id":"VS222","cip":"7s 8s","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"5","smiles":"O[C@H]1CC[C@H](CC1)O"},
{"id":"VS223","cip":"25r 26r 31r 36r","sunits":"TH","srules":"5","smiles":"OC=1C2=CC(=C(C1)O)[C@H](C=3C(=CC(=C([C@H](C=4C=C([C@H](C=5C=C([C@H]2C)C(=CC5O)O)C)C(=CC4O)O)C)C3)O)O)C"},
{"id":"VS224","cip":"19s 20r 21s 22r","sunits":"TH","bbref":"P-93.5.1.2","srules":"5","smiles":"N#CC(C(C#N)(C#N)[C@H]1CC[C@H](CC1)C)(C#N)[C@H]2CC[C@@H](CC2)C"},
{"id":"VS225","cip":"11s 14s","sunits":"TH","srules":"5","smiles":"C[C@H]1C=2C(=CC=CC2)[C@H](C3=C1C=CC=C3)C"},
{"id":"VS226","cip":"25r 26r 27s 28s 29s 30s 31r 32r 33r 34r","sunits":"TH","srules":"5","smiles":"C[C@H]1CC[C@@](CC1)([C@@]2(CC[C@]([C@]3(CC[C@@H](CC3)C)[H])([C@@]4(CC[C@@H](CC4)C)[H])CC2)[C@]5(CC[C@H](CC5)C)[H])[H]"},
{"id":"VS227","cip":"9R 10r 11S","sunits":"TH","bbref":"P-93.4.1.2","srules":"1a,5","smiles":"O=C([C@H]([C@@H]([C@H](C(O)=O)Cl)Cl)Cl)O"},
{"id":"VS228","cip":"9R 10s 11S","sunits":"TH","bbref":"P-93.4.1.2","srules":"1a,5","smiles":"O=C([C@H]([C@H]([C@H](C(O)=O)Cl)Cl)Cl)O"},
{"id":"VS229","cip":"6e 7e 8R 9S","sunits":"CT,TH","bbref":"P-92.6","srules":"1a,5","smiles":"C/C=C(/[C@H](Cl)C)\\[C@H](C)Cl"},
{"id":"VS230","cip":"6R 7S 8r","sunits":"TH","bbref":"P-93.5.1.1.1","srules":"1a,5","smiles":"S[C@H]1[C@H](C[C@H](C1)S)S"},
{"id":"VS231","cip":"8p 10p 11s","sunits":"TH,TH3","bbref":"P-93.5.1.4.2.2","srules":"1a,5","smiles":"CC(=[C@]=C1CC[C@H](CC1)CC)[H]"},
{"id":"VS232","cip":"3m 10m 11m 12m","sunits":"TH3","srules":"1a,5","smiles":"CC(=[C@]=C1CCC(CC1)=[C@@]=C(C)[H])[H]"},
{"id":"VS233","cip":"26r 27R 28S 30R 32S 33S 34r 36S 38R 39R 40r 41S 42R 43R 44S","sunits":"TH","srules":"1a,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)N([C@H](Cl)[C@@]([C@@H](Cl)C)([C@@H](Cl)C)[H])CC[C@@H](O)CCN([C@@H](Cl)[C@@]([C@H](Cl)C)([C@H](Cl)C)[H])[C@H](Cl)[C@]([C@@H](Cl)C)([C@H](Cl)C)[H])([C@@H](Cl)C)[H])C"},
{"id":"VS234","cip":"15R 17s 20S","sunits":"TH","srules":"1a,5","smiles":"O[C@H](C1=C(C=CC=C1)[C@H](O)C)C2=CC=CC=C2[C@@H](O)C"},
{"id":"VS235","cip":"15S 16r 17R 19S","sunits":"TH","bbref":"P-93.5.2.2.1","srules":"1a,5","smiles":"CN1[C@@]2(C[C@H](C[C@]1(CC2)[H])OC([C@H](CO)C=3C=CC=CC3)=O)[H]"},
{"id":"VS236","cip":"6S 7r 8R","sunits":"TH","bbref":"P-92.6","srules":"1a,5","smiles":"C[C@@H]([C@H]([C@@H](C)S)S)S"},
{"id":"VS237","cip":"8R 9r 10S","sunits":"TH","srules":"1a,5","smiles":"O=[S@](CC)[C@H](O)[S@](CC)=O"},
{"id":"VS238","cip":"7S 8R 9s","sunits":"TH","srules":"1a,5","smiles":"C[C@H]1[C@]2(CCC[C@]1([H])CC2)[H]"},
{"id":"VS239","cip":"14s 17R 18S 19R 20S 21S 22S 23R 24R","sunits":"TH","bbref":"P-92.6","srules":"1a,5","smiles":"O[C@@H](N([C@@H]([C@@H](Cl)C)Cl)[C@H]([C@@H](Cl)C)Cl)N([C@@H]([C@@H](C)Cl)Cl)[C@H]([C@@H](C)Cl)Cl"},
{"id":"VS240","cip":"5E 6E 9E 10E 13s 14s","sunits":"CT,TH","srules":"1a,5","smiles":"C[C@@H]1C\\C=C\\CC[C@@H](CC\\C=C\\C1)O"},
{"id":"VS241","cip":"7R 8s 9S","sunits":"TH","bbref":"P-93.5.2.2.1","srules":"1a,5","smiles":"O[C@H]1C[C@]2(N[C@@](C1)(CC2)[H])[H]"},
{"id":"VS242","cip":"30R 31R 32r 33S 34S 36s 37S 38R 39R 40S 41R 43r 44S 45R 46s 47R 48R 49S 50S 51R 52S","sunits":"TH","srules":"1a,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@@H](Cl)C)CN(C[C@@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)[C@H](O)N(C[C@H]([C@@H](Cl)[C@H](Cl)C)[C@H](Cl)[C@@H](Cl)C)C[C@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C"},
{"id":"VS243","cip":"7m 10m 11R 12S","sunits":"TH,TH3","bbref":"P-92.6","srules":"1a,5","smiles":"BrC(=[C@@]=C([C@H](S)CC)[C@H](CC)S)[H]"},
{"id":"VS244","cip":"2S 3S 4R 8R 12S","sunits":"TH","srules":"1a,5","smiles":"C[C@@H]([C@@]([C@@H](C)Cl)(C[C@@H](C)Br)C[C@H](C)Br)Cl"},
{"id":"VS245","cip":"1E 2E 3S 6R 9S 12R","sunits":"CT,TH","srules":"1a,5","smiles":"C(=C(/[C@H](C)Cl)\\[C@H](Cl)C)(\\[C@H](C)Br)/[C@H](Br)C"},
{"id":"VS246","cip":"3z 8z 9R","sunits":"CT,TH","srules":"3,5","smiles":"C/C=C/1\\CC[C@@H](CC1)C"},
{"id":"VS247","cip":"7z 8z 9R","sunits":"CT,TH","bbref":"P-93.5.1.4.2.2","srules":"3,5","smiles":"O/N=C/1\\CC[C@@H](CC1)C"},
{"id":"VS248","cip":"5z 8z 9S","sunits":"CT,TH","bbref":"P-93.5.1.4.2.2","srules":"3,5","smiles":"CCC[C@H]1C\\C(\\C1)=C\\Br"},
{"id":"VS249","cip":"26r 27R 28S 29R 30R 32S 33S 34R 35s 36S 37S 38S 40R 41R 42r 43S 44R 45R 46S","sunits":"TH","srules":"1a,4a,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)[C@@]([C@H](Cl)[C@@]([C@@H](Cl)C)([C@@H](Cl)C)[H])([C@H](Br)C[C@@H](O)C[C@H](Br)[C@@]([C@@H](Cl)[C@@]([C@H](Cl)C)([C@H](Cl)C)[H])([C@H](Cl)[C@]([C@@H](Cl)C)([C@H](Cl)C)[H])[H])[H])([C@@H](Cl)C)[H])C"},
{"id":"VS250","cip":"26r 27R 28S 29R 30R 32S 33S 34S 35r 36R 37S 38S 40R 41R 42r 43S 44R 45R 46S","sunits":"TH","srules":"1a,4a,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)[C@@]([C@H](Cl)[C@@]([C@@H](Cl)C)([C@@H](Cl)C)[H])([C@@H](Br)C[C@@H](O)C[C@@H](Br)[C@@]([C@@H](Cl)[C@@]([C@H](Cl)C)([C@H](Cl)C)[H])([C@H](Cl)[C@]([C@@H](Cl)C)([C@H](Cl)C)[H])[H])[H])([C@@H](Cl)C)[H])C"},
{"id":"VS251","cip":"10R 11s 12S 14R 15S 16R","sunits":"TH","bbref":"P-92.5.1","srules":"1a,4a,5","smiles":"C[C@H]([C@@]([C@H](C([C@@H](C)Cl)[C@H](Cl)C)O)([C@H](C)Cl)[H])Cl"},
{"id":"VS252","cip":"9s 10r 11S 12R","sunits":"TH","srules":"4b,5","smiles":"CO[C@@H]1[C@@H]([C@@H]([C@H]1OC)OC)OC"},
{"id":"VS253","cip":"7R 8s 9S 10S 11s 12R","sunits":"TH","bbref":"P-93.5.1.1.2, P-93.5.1.3.2","srules":"4b,5","smiles":"Cl[C@@H]1[C@@H]([C@@H]([C@H]([C@H]([C@H]1Cl)Cl)Cl)Cl)Cl"},
{"id":"VS254","cip":"7S 8r 9R 10S 11r 12R","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"4b,5","smiles":"Cl[C@H]1[C@@H]([C@H]([C@H]([C@@H]([C@H]1Cl)Cl)Cl)Cl)Cl"},
{"id":"VS255","cip":"7R 8s 9S 10S 11r 12R","sunits":"TH","bbref":"P-93.5.1.1.2","srules":"4b,5","smiles":"Cl[C@H]1[C@H]([C@H]([C@H]([C@@H]([C@H]1Cl)Cl)Cl)Cl)Cl"},
{"id":"VS256","cip":"9s 10r 11S 12R","sunits":"TH","bbref":"P-93.5.3.2","srules":"4b,5","smiles":"O1[C@@]2([C@]3([C@]4([C@]25CO5)CO4)CO3)C1"},
{"id":"VS257","cip":"8S 9r 10S","sunits":"TH","srules":"1a,4b,5","smiles":"Cl[C@H]([C@@]1(CC[C@H](CC1)C)[H])C"},
{"id":"VS258","cip":"8R 9r 10R","sunits":"TH","srules":"1a,4b,5","smiles":"Cl[C@@H]([C@@]1(CC[C@H](CC1)C)[H])C"},
{"id":"VS259","cip":"10E 11E 21S 22r 23S 24r 25S","sunits":"CT,TH","bbref":"P-93.5.7.2","srules":"1a,4b,5","smiles":"C1[C@](CCC=C1)([C@]2(CC[C@@H](CC2)/C=N/[C@H]3CC[C@@H](CC3)C4=CC=CC=C4)[H])[H]"},
{"id":"VS260","cip":"11s 12R 13S 14S 15S","sunits":"TH","bbref":"P-93.5.7.2","srules":"1a,4b,5","smiles":"C[C@@H]1CC[C@@](CC1)([C@@]2(CC[C@@H](C[C@@H]2O)C)[H])[H]"},
{"id":"VS261","cip":"39R 40R 41r 42S 43S 44S 45s 46S 47R 48R 49S 50S 51r 52S 53R 54s 55R 56R 57S 58S 59R 60S 61R 62S 63s","sunits":"TH","srules":"1a,4b,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@@H](Cl)C)C[C@H](C[C@@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)CCC[C@@](CCC[C@H](C[C@H]([C@@H](Cl)[C@H](Cl)C)[C@H](Cl)[C@@H](Cl)C)C[C@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)([C@H](C)Cl)[C@@H](C)Cl"},
{"id":"VS262","cip":"2R 3r 4S 8S 12R 16R 17r 18R 22S 26S 28R 31R 36R 38R 41R","sunits":"TH","srules":"1a,4b,5","smiles":"Cl[C@@H]([C@]([C@H](C)Cl)([H])[C@@H](N(CC[C@H](CCN([C@@H]([C@]([C@@H](C)Cl)([H])[C@H](C)Cl)Cl)[C@H](C([C@@H](C)Cl)[C@@H](C)Cl)Cl)O)[C@@H](C([C@@H](C)Cl)[C@@H](C)Cl)Cl)Cl)C"},
{"id":"VS263","cip":"2R 4R 6r 7S 9S 12S 15s 16S 18R 21R 23S 26S 29r 30S 32R 35s 36R 38R 41S 43S 46R 48S 55R 56S 61s","sunits":"TH","srules":"1a,4b,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@@H](Cl)C)C[C@H](C[C@@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)CCC[C@@](CCC[C@H](C[C@H]([C@@H](Cl)[C@H](Cl)C)[C@H](Cl)[C@@H](Cl)C)C[C@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)([C@H](C)Cl)[C@@H](C)Cl"},
{"id":"VS264","cip":"2R 4R 6r 7S 9S 15s 16S 18R 21R 23S 29r 30S 32R 35s 36R 38R 41S 43S 46R 48S 55R 56S 61s","sunits":"TH","srules":"1a,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@@H](Cl)C)CN(C[C@@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)CCC[C@@](CCCN(C[C@H]([C@@H](Cl)[C@H](Cl)C)[C@H](Cl)[C@@H](Cl)C)C[C@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)([C@H](C)F)[C@@H](C)F"},
{"id":"VS265","cip":"2R 4R 6r 7S 9S 12S 15s 16S 18R 21R 23S 26S 29r 30S 32R 35s 36R 38R 41S 43S 46R 48S 55R 61S","sunits":"TH","srules":"1a,4b,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@@H](Cl)C)C[C@H](C[C@@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)CCC[C@@](CCC[C@H](C[C@H]([C@@H](Cl)[C@H](Cl)C)[C@H](Cl)[C@@H](Cl)C)C[C@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)(CC)[C@@H](C)Cl"},
{"id":"VS266","cip":"2R 4R 6r 7S 9S 15s 16S 18R 21R 23S 29r 30S 32R 35s 36R 38R 41S 43S 46R 48S 55R 61S","sunits":"TH","srules":"1a,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@@H](Cl)C)CN(C[C@@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)CCC[C@@](CCCN(C[C@H]([C@@H](Cl)[C@H](Cl)C)[C@H](Cl)[C@@H](Cl)C)C[C@H]([C@H](Cl)[C@H](Cl)C)[C@@H](Cl)[C@@H](Cl)C)(CC)[C@@H](C)F"},
{"id":"VS267","cip":"2R 4R 6r 7S 9S 16r 21r 22R 24S 28s 29S 31S 34S 36R 40s 41R 43S 46S 48R 51R 53R 56R 57S","sunits":"TH","srules":"1a,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@H](C)Cl)CN(CC[C@@](CCN(C[C@@H]([C@@H](Cl)[C@H](C)Cl)[C@H](Cl)[C@@H](C)Cl)C[C@@H]([C@H](Cl)[C@H](C)Cl)[C@@H](Cl)[C@@H](C)Cl)([C@H](F)C)[C@H](C)F)C[C@H]([C@@H](Cl)[C@H](C)Cl)[C@H](Cl)[C@@H](C)Cl"},
{"id":"VS268","cip":"2R 4R 6r 7S 9S 13S 16S 19R 21r 22R 24S 28s 29S 31S 34S 36R 40s 41R 43S 46S 48R 51R 53R 56R 57S","sunits":"TH","srules":"1a,4b,5","smiles":"C[C@@H](Cl)[C@H](Cl)[C@@H]([C@H](Cl)[C@H](C)Cl)C[C@@H](CC[C@@](CC[C@H](C[C@@H]([C@@H](Cl)[C@H](C)Cl)[C@H](Cl)[C@@H](C)Cl)C[C@@H]([C@H](Cl)[C@H](C)Cl)[C@@H](Cl)[C@@H](C)Cl)([C@H](F)C)[C@H](C)F)C[C@H]([C@@H](Cl)[C@H](C)Cl)[C@H](Cl)[C@@H](C)Cl"},
{"id":"VS269","cip":"26r 27R 28S 29R 30R 32S 33S 34R 35S 36R 37S 38S 40R 41R 42r 43S 44R 45R 46S","sunits":"TH","srules":"1a,4a,4b,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)[C@@]([C@H](Cl)[C@@]([C@@H](Cl)C)([C@@H](Cl)C)[H])([C@H](Br)C[C@@H](O)C[C@@H](Br)[C@@]([C@@H](Cl)[C@@]([C@H](Cl)C)([C@H](Cl)C)[H])([C@H](Cl)[C@]([C@@H](Cl)C)([C@H](Cl)C)[H])[H])[H])([C@@H](Cl)C)[H])C"},
{"id":"VS270","cip":"26r 27R 28S 29R 30R 32S 33S 34S 35R 36S 37S 38S 40R 41R 42r 43S 44R 45R 46S","sunits":"TH","srules":"1a,4a,4b,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)[C@@]([C@H](Cl)[C@@]([C@@H](Cl)C)([C@@H](Cl)C)[H])([C@@H](Br)C[C@@H](O)C[C@H](Br)[C@@]([C@@H](Cl)[C@@]([C@H](Cl)C)([C@H](Cl)C)[H])([C@H](Cl)[C@]([C@@H](Cl)C)([C@H](Cl)C)[H])[H])[H])([C@@H](Cl)C)[H])C"},
{"id":"VS271","cip":"14S 15S 16R 17S 18R 19R 20S 21S 22r 23S 24S","sunits":"TH","srules":"1a,4a,4b,5","smiles":"C[C@@H]([C@@H]([C@]([C@@H]([C@]([C@@H]([C@H](C)O)O)([C@H]([C@H](C)O)O)[H])C)([C@@H]([C@H](O)C)O)[H])O)O"},
{"id":"VS272","cip":"23Z 24Z 25R 26r 27R 28S 29S 31S 32S 33R 34Z 35Z 36R 38S 39S 40S 41s 42S 43R 44R","sunits":"CT,TH","srules":"1a,4a,4b,5","smiles":"C[C@H]([C@]([C@H](\\C(=C/1\\[C@H](Br)/C(=C(\\[C@@H]([C@@]([C@H](C)Cl)([C@H](C)Cl)[H])Cl)/[C@@H](Cl)[C@@]([C@H](C)Cl)([C@@H](C)Cl)[H])/[C@@H]1Br)\\[C@@H](Cl)[C@@]([C@H](C)Cl)([C@H](C)Cl)[H])Cl)([C@H](C)Cl)[H])Cl"},
{"id":"VS273","cip":"27r 28R 30S 31S 32s 33S 34R 35S 37S 38r 39S 40R 41s 42S 43R 44S 45R 46R","sunits":"TH","srules":"1a,4c,5","smiles":"C[C@H]([C@]([C@@]([C@@H]([C@@]([C@@]([C@H](C)Cl)([C@@H](Cl)C)[H])([C@]([C@H](C)Cl)([C@@H](C)Cl)[H])[C@@]([C@H](C)Cl)([C@@H](C)Cl)[H])O)([C@]([C@H](C)Cl)([C@H](C)Cl)[H])[C@@]([C@@H](Cl)C)([C@@H](C)Cl)[H])([C@H](C)Cl)[H])Cl"},
{"id":"VS274","cip":"26s 27r 28R 29s 30R 31S 33S 34S 35S 36s 37S 39R 40R 41r 42R 43S 44R 45R 46S","sunits":"TH","srules":"1a,4c,5","smiles":"C[C@H]([C@]([C@@]([C@@H]([C@@]([C@@]([C@H](C)Cl)([C@@H](C)Cl)[H])([C@]([C@@H](C)Cl)([C@@H](C)Cl)[H])[C@@]([C@@H](C)Cl)([C@H](C)Cl)[H])O)([C@]([C@@H](C)Cl)([C@H](C)Cl)[H])[C@@]([C@H](C)Cl)([C@H](C)Cl)[H])([C@@H](Cl)C)[H])Cl"},
{"id":"VS275","cip":"26r 27R 28S 29s 30R 31r 32R 33S 34R 35S 36R 37s 38R 39s 40S 41S 42s 43R 44R 45S 46S","sunits":"TH","srules":"1a,4c,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)[C@@]([C@H](Cl)[C@@]([C@H](Cl)C)([C@@H](Cl)C)[H])([C@H](Br)C[C@@H](O)C[C@@H](Br)[C@]([C@H](Cl)[C@@]([C@@H](Cl)C)([C@H](Cl)C)[H])([C@@H](Cl)[C@]([C@H](Cl)C)([C@@H](Cl)C)[H])[H])[H])([C@@H](Cl)C)[H])C"},
{"id":"VS276","cip":"10R 11s 12R 13r 14R 15S 16S","sunits":"TH","bbref":"P-92.5.3","srules":"1a,4c,5","smiles":"C[C@H]([C@@]([C@H]([C@@]([C@@H](C)Cl)([C@@H](Cl)C)[H])O)([C@H](C)Cl)[H])Cl"},
{"id":"VS277","cip":"26r 27R 28S 29R 30R 32S 33S 34S 35S 36R 37S 38S 40R 41R 42s 43R 44R 45S 46S","sunits":"TH","srules":"1a,4a,4c,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)[C@@]([C@H](Cl)[C@@]([C@@H](Cl)C)([C@@H](Cl)C)[H])([C@@H](Br)C[C@@H](O)C[C@@H](Br)[C@@]([C@@H](Cl)[C@@]([C@H](Cl)C)([C@H](Cl)C)[H])([C@H](Cl)[C@]([C@H](Cl)C)([C@@H](Cl)C)[H])[H])[H])([C@@H](Cl)C)[H])C"},
{"id":"VS278","cip":"26r 27R 28S 29s 30R 31r 32R 33S 34R 35R 36R 37S 38R 39r 40R 41S 42s 43R 44S 45S 46S","sunits":"TH","srules":"1a,4a,4c,5","smiles":"Cl[C@@H]([C@]([C@H](Cl)[C@@]([C@H](Cl)[C@@]([C@H](Cl)C)([C@@H](Cl)C)[H])([C@H](Br)C[C@@H](O)C[C@@H](Br)[C@]([C@H](Cl)[C@@]([C@H](Cl)C)([C@@H](Cl)C)[H])([C@@H](Cl)[C@]([C@H](Cl)C)([C@@H](Cl)C)[H])[H])[H])([C@@H](Cl)C)[H])C"},
{"id":"VS279","cip":"14R 15r 16S 17s 18S","sunits":"TH","bbref":"P-93.6","srules":"4b,4c,5","smiles":"O[C@@H](C[C@H]1CC[C@@H](CC1)C)C[C@@H]2CC[C@@H](CC2)C"},
{"id":"VS280","cip":"16R 17R 18R 19R 20R","sunits":"TH","srules":"6","smiles":"C1C[C@]23CCC[C@@]24CCC[C@@]45CCC[C@@]56CCC[C@]36C1"},
{"id":"VS281","cip":"17S","sunits":"TH","srules":"6","smiles":"C1=C2[C@@]34C(=C1)CCCCC3=CC=C4CCCC2"},
{"id":"VS282","cip":"17R","sunits":"TH","srules":"6","smiles":"C1=C2[C@]34C(=C1)CCCCC3=CC=C4CCCC2"},
{"id":"VS283","cip":"13S","sunits":"TH","srules":"6","smiles":"C1=C2[C@@]3(C(CCC=C3CC1)=CCC2)[H]"},
{"id":"VS284","cip":"13R","sunits":"TH","srules":"6","smiles":"C1=C2[C@]3(C(CCC=C3CC1)=CCC2)[H]"},
{"id":"VS285","cip":"11R","sunits":"TH","bbref":"P-93.5.3.2","srules":"6","smiles":"O=C1[C@]2(NCC1)C(CCN2)=O"},
{"id":"VS286","cip":"15S","sunits":"TH","bbref":"P-93.5.3.2","srules":"6","smiles":"C1[C@@]2(CC[C@]13CCCC3)C[C@@]4(CC2)CCCC4"},
{"id":"VS287","cip":"1M 3M","sunits":"TH3","srules":"6","smiles":"C12=[C@@]=C(CCCCCC1)CCCCCC2"},
{"id":"VS288","cip":"11S","sunits":"TH","bbref":"P-93.5.3.2","srules":"6","smiles":"O=C1[C@@]2(CCCC2=O)CCC1"},
{"id":"VS289","cip":"7R","sunits":"TH","srules":"6","smiles":"C1=C2[C@@]3(C(C1)=CCC3=CC2)[H]"},
{"id":"VS290","cip":"7S","sunits":"TH","srules":"6","smiles":"C1=C2[C@]3(C(C1)=CCC3=CC2)[H]"},
{"id":"VS291","cip":"9R","sunits":"TH","bbref":"P-93.5.3.2","srules":"6","smiles":"C1[C@@]2(OCC1)OCCC2"},
{"id":"VS292","cip":"13S","sunits":"TH","srules":"6","smiles":"C1=C2[C@@]34C(=C1)CCC3=CC=C4CC2"},
{"id":"VS293","cip":"2Z 5Z 8Z 13Z 14Z 15Z 16S","sunits":"CT,TH","srules":"1a,6","smiles":"C1/C=C/2\\C[C@]3(C/C(/C1)=C\\CC\\C(\\C3)=C\\CC2)[H]"},
{"id":"VS294","cip":"9S 10R 11R 12S 13R","sunits":"TH","srules":"1a,6","smiles":"O[C@H]1O[C@@]2(O[C@H]1O)O[C@H]([C@H](O2)O)O"},
{"id":"VS295","cip":"9S 10R 11S 12R 13S","sunits":"TH","srules":"1a,6","smiles":"O[C@H]1O[C@@]2(O[C@H]1O)O[C@@H]([C@@H](O2)O)O"},
{"id":"VS296","cip":"19S 20S 21S","sunits":"TH","srules":"4c,6","smiles":"C1[C@@]2(OCCC1)CC[C@]3(CC2)CC[C@@]4(CC3)OCCCC4"},
{"id":"VS297","cip":"17R 18S 19S","sunits":"TH","bbref":"P-93 5.3.5","srules":"4c,6","smiles":"C1[C@@]2(CC[C@]3(C1)OCCC3)CC[C@@]4(CC2)CCCO4"},
{"id":"VS298","cip":"7R 8R 9S","sunits":"TH","bbref":"P-93 5.3.5","srules":"4c,6","smiles":"Cl[C@H]1C[C@]2(C1)C[C@H](C2)Cl"},
{"id":"VS299","cip":"6z 8z 9z 10z 11S","sunits":"CT,TH","srules":"5,6","smiles":"C/C=C\\1/C[C@]2(C\\C(\\C2)=C\\C)C1"},
{"id":"VS300","cip":"28s 29S 30R","sunits":"TH","srules":"5,6","smiles":"O[C@H](C[C@@]12C=3CCC=C2CCC=C1CCC3)C[C@]45C=6CCC=C5CCC=C4CCC6"}
];

function and(left, right) {
	return function(data) {
		return left(data) && right(data);
	};
}

function redraw() {

  var filter = function(){return true};

  var terms = $('#search').val().split(",");
  for (var i=0; i < terms.length; i++) {
  	var term = terms[i].trim().toUpperCase();
	if (term.startsWith("VS")) {
	    var vslist = [];
	    var vs = term.substring(2).split("+");
	    for (var t = vs.length; --t >= 0;) {
		if (vs[t].indexOf("-") > 0) {
		    var span = vs.splice(t,1)[0].split("-");
		    var n1 = parseInt(span[0])
			var n2 = parseInt(span[1])
			if (!isNaN(n1) && !isNaN(n2) && n1 <= n2)
			    for (var k = n1; k <= n2; k++)
				vslist[k] = 1;
		} else {
		    vslist[parseInt(vs[t])] = 1;
		}
	    }
	    filter = and(filter, function(data){ return vslist[parseInt(data.id.substring(2))]; });
	}
  	if (term.startsWith("RULE")) {
  		var rule = term.split(" ")[1].toLowerCase();
  		filter = and(filter, (function(rule) {
  			return function(data){
  				return data.srules && data.srules.indexOf(rule) >= 0;
  			};})(rule));
  	}
  	if (term.startsWith("CT") || 
  		term.startsWith("TH") || 
  		term.startsWith("HE") || 
  		term.startsWith("AT")) {
  		filter = and(filter, (function(x) {
  			return function(data){
  				return data.sunits && data.sunits.indexOf(x) >= 0;
  			};})(term));
  	}
  	if (term.startsWith("P-")) {
  		filter = and(filter, (function(x) {
  			return function(data){
  				return data.bbref && data.bbref.indexOf(x) >= 0;
  			};})(term));	
  	}
  }

  var $grid = $('#grid');
  $grid.empty();
  for (var i = 0; i < data.length; i++) {
  	if (!filter(data[i]))
  		continue;
  	var $example = $('<div class="example">');
	$example.attr('id', data[i].id);
  	$example.append($("<div class='img_box'>").append($('<img>').attr('src', "img/" + data[i].id + ".svg")));
  	var $info = $("<table>").append(
  		$('<tr>').append($("<th>").addClass('id').append(data[i].id)),
  		$('<tr>').append($("<th>").append("Links"))
  				 .append($("<td>").append($("<a>").attr('href', "mol2d/" + data[i].id + ".sdf").append("SDfile"), " (2D), ",
  				 					      $("<a>").attr('href', "mol3d/" + data[i].id + ".sdf").append("SDfile"), " (3D), ",
							                      $("<a>").attr('target', '_blank').attr('href', jsmol + data[i].id + ".sdf").append("View 3D (JSmol)"))),
  		$('<tr>').append($("<th>").append("SMILES"))
  				 .append($("<td>").addClass('smiles').append(data[i].smiles)),
  		$('<tr>').append($("<th>").append("Units"))
  				 .append($("<td>").append(data[i].sunits)),
  		$('<tr>').append($("<th>").append("Rules"))
  				 .append($("<td>").append(data[i].srules)),
  		$('<tr>').append($("<th>").append("BlueBook"))
  				 .append($("<td>").append(data[i].bbref)),
  		);
  	$example.append($info);
  	$grid.append($example);
  }
}
