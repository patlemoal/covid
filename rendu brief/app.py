from flask import Flask, render_template, request
import json
#from data import * #on met * pour importer toutes les fonctions du fichier data , nou saurions pu mettre openfile, epenfile3
from data import focus, moyby, dephop, piehf, hopdep2




app = Flask(__name__)
# app fait appel au gestionnaire qui utilise flask (équivalant de my db); méthode comme le init dans les classes

#CONNECTION A LA PAGE D'ACCEUIL (page)
@app.route('/')
def page():
    donnees = focus('d5.csv')
    donnees3 = moyby('./d5.csv')
    donnees4 = dephop('./d5.csv')
    donnees5 = piehf('./d5.csv')
    #donnees6 = openfile6('./donneeshospitalieres.csv')
    donnees7 = hopdep2('./d5.csv')
    return render_template('page.html', donnees=donnees, donnees3=donnees3, donnees4=donnees4, donnees5=donnees5, donnees7=donnees7)
    #donnees à gauche variable python, donnees à droite variable htlm




if __name__ == "__main__" :
    app.run(debug=True)